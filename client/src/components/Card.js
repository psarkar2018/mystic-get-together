import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Card.css';

import 'bootstrap/dist/js/bootstrap.bundle.js';

import {
  Container,
  Row,
  Col,
  Media,
} from 'reactstrap';
import * as sdk from '../js-sdk/sdk';


class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverOpen: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleCard = this.toggleCard.bind(this);
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  toggleCard(card) {
    if (card['state.tapped']) {
      sdk.untap(card);
    } else {
      sdk.tap(card);
    }
  }

  render() {
    const { card } = this.props;

    return (
      <Container
        fluid
        className="card-container d-flex flex-column justify-content-center mh-100 h-100 mw-100 w-100 border rounded p-0 m-0"
        style={{
          'overflow-y': 'auto',
          'overflow-x': 'hidden',
        }}
      >
        {/* Card name and mana cost row */}
        <Row
          className="card-name-cost-row d-inline-flex flex-nowrap mw-100 no-gutters flex-nowrap justify-content-between flex-grow-0 flex-shrink-0"
          style={{
            'font-size': '1vw',
          }}
        >
          {/* Card name */}
          <Col
            xs="7"
            className="card-name-col p-0 m-0 justify-content-start"
          >
            <button
              tabIndex="0"
              type="button"
              color="link"
              size="sm"
              className="card-name-pop text-dark font-weight-bold bg-transparent m-0 p-0 align-top text-left text-nowrap mh-100 h-100 mw-100 w-100"
              data-toggle="popover"
              data-trigger="focus"
              title={card.getName()}
              data-content={card.getName()}
              id="Popover"
              style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              {card.getName()}
            </button>
          </Col>

          {/* Mana cost */}
          <Col
            xs="5"
            className="card-mana-cost-col p-0 m-0 justify-content-end"
          >
            <button
              tabIndex="0"
              type="button"
              color="link"
              size="sm"
              block
              className="card-cost-pop text-dark font-weight-bold bg-transparent m-0 p-0 justify-end align-start text-right text-nowrap mh-100 h-100 w-100 mw-100"
              data-toggle="popover"
              data-trigger="focus"
              title={card.getName()}
              data-content={card.getManaCost()}
              id="Popover"
              style={{
                'text-overflow': 'ellipsis',
                overflow: 'hidden',
                'font-size': '.75vw',
              }}
            >
              {card.getManaCost()}
            </button>
          </Col>
        </Row>
        {/* Image row with a col wrapper to control size of image */}
        <Row
          className="card-art-row justify-content-center mw-100 w-100 no-gutters flex-grow-1 flex-shrink-1"
          style={{
            'flex-basis': '40%',
            minHeight: '40%',
            maxHeight: '80%',
            overflow: 'hidden',
          }}
        >
          <Col xs="12" className="card-art-col p-0 mh-100">
            <Media
              obj
              className="card-art-image img-fluid d-block mx-auto h-100 mh-100 w-100 mw-100"
              alt="Card Art"
              src={card.getImage()}
            />
          </Col>
        </Row>

        {/* Row for type and set logo */}
        <Row
          className="card-type-set-row justify-content-around no-gutters flex-grow-1 flex-shrink-5"
          style={{
            'font-size': '.5vw',
            'flex-basis': '1vw',
            'max-height': '1vw',
          }}
        >
          {/* Card type */}
          <Col
            className="card-type-col d-flex flex-grow-10 flex-shrink-1 align-items-center px-0 h-100 mh-100 mw-100 w-100 text-left"
            style={{
              'flex-basis': '50%',
              overflow: 'hidden',
            }}
          >
            <button
              tabIndex="0"
              type="button"
              color="link"
              block
              size="sm"
              className="card-type-pop text-dark font-weight-bold bg-transparent m-0 p-0 align-items-start align-top text-left text-wrap mh-100 h-100 mw-100 w-100"
              data-toggle="popover"
              data-trigger="focus"
              data-content={card.getType()}
              id="Popover"
              value={card.getType()}
              style={{
                'text-overflow': 'ellipsis',
                overflow: 'hidden',
              }}
            >
              {card.getType()}
            </button>
          </Col>
          <Col
            className="flex-shrink-10 set-image-col align-items-baseline flex-grow-1 p-0 m-0 mh-100"
            style={{
              'flex-basis': '10%',
              overflow: 'hidden',
            }}
          >
            {/* Card set image */}
            <Media
              obj
              className="set-image img-fluid d-block mx-auto align-self-baseline"
              alt="Set Image"
              src={card.getSetImage()}
              style={{
                'max-height': '100%',
              }}
            />
          </Col>
        </Row>

        {/* Card text */}
        <Row
          className="card-text-row no-gutters align-items-stretch flex-grow-1 flex-shrink-10"
          style={{
            'font-size': '.75vw',
            'flex-basis': '1.5vw',
            'max-height': '1.5vw',
          }}
        >
          <Col
            xs="12"
            className="card-text-col d-flex align-items-stretch mh-100 h-100 m-0 p-0"
          >
            <button
              tabIndex="0"
              type="button"
              color="link"
              block
              size="sm"
              className="card-text-pop text-dark font-weight-bold bg-transparent m-0 p-0 align-top text-left text-wrap mh-100 h-100 mw-100 w-100"
              data-toggle="popover"
              data-trigger="focus"
              title={card.getName()}
              data-content={card.getCardText()}
              id="Popover"
              style={{
                'text-overflow': 'ellipsis',
                overflow: 'hidden',
              }}
            >
              {card.getCardText()}
            </button>
          </Col>
        </Row>
        {/* Power and toughness if creature */}
        <Row
          className="card-power-toughness-row d-inline-flex no-gutters justify-content-between flex-grow-1 flex-shrink-0"
          style={{
            overflow: 'hidden',
            flexBasis: '1.4vw',
            'font-size': '.75vw',
            'max-height': '1.5vw',
          }}
        >
          <Col className="card-power-toughness-col px-0 d-flex flex-shrink-0 flex-grow-2 justify-content-end">
            <button
              tabIndex="0"
              type="button"
              color="link"
              block
              size="sm"
              className="card-power-toughness text-dark font-weight-bold bg-transparent m-0 p-0 align-top text-right text-wrap mh-100 h-100 mw-100 w-100"
              data-toggle="popover"
              data-trigger="focus"
              title={card.getName()}
              data-content={card.getType()}
              id="Popover"
              style={{
                'text-overflow': 'ellipsis',
                overflow: 'hidden',
              }}
            >
              {card.getPowerToughness()}
              {String()}
            </button>
          </Col>
        </Row>


        {/* Power and toughness if creature */}
        <Row
          className="card-power-toughness-row m-0 px-1 flex-grow-5 flex-shrink-3"
          style={
            {
              'max-height': '15%',
            }
          }
        >
          <Col
            xs="12"
            className="card-power-toughness-col px-1 d-flex flex-shrink-1 flex-grow-2"
            style={
              {
                'max-height': '2vh',
              }
            }
          >
            <p
              className="card-power-toughness text-right text-nowrap"
              style={
                {
                  'font-size': '45%',
                  'text-overflow': 'hidden',
                }
              }
            >
              {card.getPowerToughness()}
            </p>
          </Col>
        </Row>

      </Container>
    );
  }
}

Card.propTypes = {
  card: PropTypes.shape({}).isRequired,
};

export default Card;
