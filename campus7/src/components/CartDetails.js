import React from "react";
import { Table, Icon } from "semantic-ui-react";

export default function CartDetails(props) {
  const cart = props.cart;
  return (
    <>
      <div>
        {" "}
        <Icon
          name="trash alternate"
          onClick={props.emptyCart}
          style={{ cursor: "pointer" }}
        />
        <span>vider le caddie</span>
      </div>

      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine textAlign="center">
              Quantité
            </Table.HeaderCell>
            <Table.HeaderCell>Titre</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Prix unitaire</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Prix total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(cart).map(key => (
            <Table.Row key={cart[key].id}>
              <Table.Cell>
                <Icon
                  name="minus square outline"
                  onClick={() => props.removeFromCart(cart[key])}
                  style={{ cursor: "pointer" }}
                />
                {cart[key].quantity}{" "}
                <Icon
                  name="plus square outline"
                  onClick={() => props.addToCart(cart[key])}
                  style={{ cursor: "pointer" }}
                />
              </Table.Cell>
              <Table.Cell singleLine>{cart[key].title}</Table.Cell>
              <Table.Cell textAlign="right">{cart[key].price} €</Table.Cell>
              <Table.Cell textAlign="right">
                {(cart[key].quantity * cart[key].price).toFixed(2)} €
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
