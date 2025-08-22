import {defineQuery} from "groq";

export const STARTUPS_QUERY =
    defineQuery(`*[_type == "startup" && defined(slug) && !defined($search) || title match $search|| category match $search || author->name match $search] | order(_createdAt desc) {
  _id,
    title,
    slug,
    _createdAt,
    author -> {
      _id, name, image, bio
    },
    views,
    description,
    category,
    image
}`);

export const STARTUP_DETAILS_BY_ID =
    defineQuery(
        `*[_type == "startup" && _id == $id][0]{
  _id,
    title,
    slug,
    _createdAt,
    author -> {
      _id, name, image, bio, username
    },
    views,
    description,
    category,
    image,
    pitch
}
`);

export const VIEWS_BY_ID =
    defineQuery(
        `*[_type == "startup" && _id == $id][0]{
        _id,
        views,
        }`);

export const AUTHOR_BY_GITHUB =
    defineQuery(
        `*[_type == "author" && id == $id][0]{
        _id, id,
        name,username,
        email, image, bio}`
    )

export const STARTUPS_QUERY_BY_AUTHOR =
    defineQuery(`*[_type == "startup" && author._ref == $id ] | order(_createdAt desc) {
  _id,
    title,
    slug,
    _createdAt,
    author -> {
      _id, name, image, bio
    },
    views,
    description,
    category,
    image
}`);

export const USER_BY_ID =
    defineQuery(
        `*[_type == "author" && _id == $id][0]{
        _id, name, image, bio, username}`
    )

