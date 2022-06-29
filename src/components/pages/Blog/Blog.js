const Blog = () => {
  return (
    <div className="text-center">
      <h1 className="text-center font-weight-bold my-5">Blogs</h1>
      <article className="p-3 mb-3">
        <h2>Difference between javascript and nodejs</h2>
        <p>
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. Whereas Node JS is an interpreter or running
          environment for a JavaScript programming language that holds many
          excesses, it requires libraries that can easily be accessed from
          JavaScript programming for better use.
        </p>
      </article>
      <article className="p-3 mb-3">
        <h2>When should you use nodejs and when should you use mongodb</h2>
        <p>
          Node. js is primarily used for non-blocking, event-driven servers, due
          to its single-threaded nature. It's used for traditional web sites and
          back-end API services, but was designed with real-time, push-based
          architectures in mind and NoSQL databases like MongoDB are a good
          choice when your data is document-centric and doesn't fit well into
          the schema of a relational database, when you need to accommodate
          massive scale, when you are rapidly prototyping, and a few other use
          cases.
        </p>
      </article>
      <article className="p-3 mb-3">
        <h2> Differences between sql and nosql databases</h2>
        <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
      </article>
      <article className="p-3 mb-3"><h2> What is the purpose of jwt and how does it work</h2>
      <p>WT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
      </article>
    </div>
  );
};

export default Blog;
