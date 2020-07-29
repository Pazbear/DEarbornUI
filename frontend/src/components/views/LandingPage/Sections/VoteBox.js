import React from 'react';
import {Card, Button, Col, Row} from 'antd'

import {firstImg} from './imagePaths'

const {Meta} = Card

const renderCards = () => {
    return (
        <Col className="item-vote" lg={8} md={12} xd={24}>
            <img className="item-vote-img" src={firstImg} alt/>
            <div className="item-vote-show">
                <a id="go-detail" href="/vote/detail">자세히보기</a>
                <Button id="button-vote">투표하기</Button>
            </div>
        </Col>
    )
}

function VoteBox(props) {
    return (
        <div className="container-vote">
            <div className="container-vote-header">
                Let's Vote!!
            </div>
            <div className="container-vote-section">
                <Row gutter={[16,16]}>
                    {renderCards()}
                    {renderCards()}
                    {renderCards()}
                    {renderCards()}
                    {renderCards()}
                    {renderCards()}
                </Row>
            </div>
        </div>
    );
}

export default VoteBox;