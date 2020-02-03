import React, { useEffect } from "react";
import { Grid, Segment } from "semantic-ui-react";
import Book from "../containers/BookCardContainer";

export default function BookList(props) {

  useEffect(() => {
   props.fetchBook();
   console.log(props)
  }, []);

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
