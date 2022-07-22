import React, { useEffect, useContext } from "react";
import Head from "next/head";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { gql as gql2, GraphQLClient } from "graphql-request";

import Header from "../components/Header";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import About from "../components/About";
import { OffsetContext } from "../contexts/OffsetContext";

const query = gql2`
query MyQuery {
  allProjects(orderBy: _createdAt_ASC) {
    title
    slug
    skills
    date
    content
    bannerImage {
      url
    }
    slider {
      url
    }
    blackOverlayText
    index
  }
}
`;
export default function Home({ loading, contributions, project }) {
  const { setContributionsState } = useContext(OffsetContext);
  const contributionsArr = [];

  useEffect(() => {
    contributions.weeks.forEach((element, i) => {
      const sum = element.contributionDays.reduce((accumulator, object) => {
        return accumulator + object.contributionCount;
      }, 0);
      contributionsArr.push(sum);
    });

    setContributionsState(contributionsArr);
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>Mike | Software engineer</title>
        <meta
          name="description"
          content="Hi, my name is Mike, I am currently studing software engineering on Amsterdam University of Applied Science. I have a passion for webdevelopment, and love to work with modern frontend frameworks. My nickname is therefore 'Javascript ninja', atleast thats how i call myself."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && <Loading />}
      <>
        <Navbar />
        <Header loading={loading} />
        <Work projects={project} />
        <About />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });
  const endpoint = "https://graphql.datocms.com/";
  const graphqlClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/js",
      authorization: "bearer " + process.env.CMS_API_KEY,
    },
  });
  const project = await graphqlClient.request(query);
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "MikeyS2002") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  contributionCount
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const contributions = user.contributionsCollection.contributionCalendar;

  return {
    props: {
      contributions,
      project,
    },
    revalidate: 10,
  };
}
