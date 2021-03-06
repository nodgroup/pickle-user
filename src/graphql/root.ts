import { merge } from "lodash";
import { gql } from "apollo-server";
import * as role from "./role";
import * as user from "./user";

const base = gql`
  type Query
  type Mutation
`;

export const typeDefs = [base, user.typeDefs, role.typeDefs];
export const resolvers = merge(user.resolvers, role.resolvers);
