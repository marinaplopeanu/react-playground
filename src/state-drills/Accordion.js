import React, { Component } from 'react'

export default class Accordion extends Component {
    static defaultProps = {
        sections: []
    };

    state = {
        activeIndex: null,
    }

    handleClick = (Index) => {
        this.setState({ activeIndex: Index })
    }

    renderItem(section, id, activeIndex) {
        return (
            <li className='Accordion__item' key={id}>
                <button
                    type='button'
                    onClick={() => this.handleClick(id)}
                >
                {section.title}
                </button>
                {(activeIndex === id) && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const { activeIndex } = this.state
        const { sections } = this.props
        return (
            <ul className='Accordion'>
                {sections.map((section, id) =>
                    this.renderItem(section, id, activeIndex)
                )}
            </ul>
        )
    }
}