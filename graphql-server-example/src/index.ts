import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    year: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
export const books = [
   {
      title: 'Programação Extrema',
      author: 'Kent Beck',
      year: 1999
   },
   {
      title: 'Refatorações',
      author: 'Martin Fowler',
      year: 1999
   },
   {
      title: 'Startup Enxuta',
      author: 'Eric Ries',
      year: 2011
   },
   {
      title: 'Homo Deus',
      author: 'Yuval Noah Harari',
      year: 2015
   },
   {
      title: 'O Homem mais rico da babilônia',
      author: 'George S. Clason',
      year: 1926
   },
   {
      title: 'Desbravando SOLID',
      author: 'Mário Amaral',
      year: 2018
   },
   {
      title: 'Capital Erótico',
      author: 'Catherine Hakim',
      year: 2011
   },
   {
      title: '7 Hábitos de pessoas altamente eficazes',
      author: 'Stephen R. Covey',
      year: 1989
   },
   {
      title: 'Descomplicando Docker',
      author: 'Rafael Gomes',
      year: 2017
   },
   {
      title: 'A Philosophy of Software Design',
      author: 'John Ousterhout',
      year: 2018
   },
   {
      title: '24 passos para o empreendedorismo',
      author: 'Bill Aulet',
      year: 0
   },
   {
      title: 'Rápido e Devagar: duas formas de pensar',
      author: 'Daniel Kahneman',
      year: 2011
   },
   {
      title: 'Mais esperto que o Diabo',
      author: 'Napoleon Hill',
      year: 2011
   },
   {
      title: 'SOLID e TDD',
      author: 'Mauricio Aniche',
      year: 0 
   },
   {
      title: 'Práticas de Desenvolvimento Ágil',
      author: 'Mauricio Aniche',
      year: 0 
   },
   {
      title: 'Arquitetura de Software',
      author: 'Mauricio Aniche',
      year: 0 
   },
   {
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      author: 'Robert C. Martin (Uncle Bob)',
      year: 0 
   },
   {
      title: 'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design',
      author: 'Robert C. Martin (Uncle Bob)',
      year: 0 
   },
   {
      title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
      author: 'Robert C. Martin (Uncle Bob)',
      year: 0 
   }
];


// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
   Query: {
      books: () => books,
   },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
   typeDefs,
   resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
   listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);