import React, { Component } from 'react';
import './MovieContent.css';
import { Icon } from 'antd';

class MovieContent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            toggleState: false,
        };
    }

    toggleClass() {
        const currentState = this.state.toggleState;
        this.setState({ toggleState: !currentState });
    }

    render() {

        return (
            <React.Fragment>
                <div className={`column ${this.state.toggleState ? 'rotate': null}`} onClick={()=> this.toggleClass()}>
                    <div className={`face`}>
                        <Icon type="heart" />
                        <dl>
                            <dt>Imię</dt>
                            <dd>{ this.props.name }</dd>
                        </dl>
                        <dl>
                            <dt>Urodzony</dt>
                            <dd>{ this.props.birth_year }</dd>
                        </dl>
                        <dl>
                            <dt>Płeć</dt>
                            <dd>{ this.props.gender }</dd>
                        </dl>
                        <dl>
                            <dt>Wzrost i waga</dt>
                            <dd>{ this.props.height }cm { this.props.mass }kg</dd>
                        </dl>
                        <dl>
                            <dt>Kolor oczu, skóry i włosów</dt>
                            <dd>{ this.props.eye_color } / { this.props.skin_color } / { this.props.hair_color }</dd>
                        </dl>
                    </div>
                    <div className={`reverse`}>
                        <dl>
                            <dt>Edytowany</dt>
                            <dd>{  this.props.edited }</dd>
                        </dl>
                        <dl>
                            <dt>Utworzony</dt>
                            <dd>{  this.props.created }</dd>
                        </dl>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MovieContent;
