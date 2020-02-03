import React, { useState, useEffect } from "react";
import { Grid, Segment } from "semantic-ui-react";
import Book from "./BookCard";

export default function BookList(props) {
  //const [books, setBooks] = useState([]);

  useEffect(() => {
   props.fetchBook();
   console.log(props)
  }, []);
  // grid layout based on https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/ResponsiveLayout.js
  return (
    <>
      <h3>Livres</h3>
      {props.books.length === 0 ? (
        <div>loading...</div>
      ) : (
        <div>
          <Grid columns={3} doubling stackable>
            {props.books.map(b => (
              <Grid.Column key={b.id}>
                <Segment style={{ height: "26em" }}>
                  <Book data={b} />
                </Segment>
              </Grid.Column>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
}
