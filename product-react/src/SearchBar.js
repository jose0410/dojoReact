import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handlerInputChange = this.handlerInputChange.bind(this);
        this.handlerCheckBoxChange = this.handlerCheckBoxChange.bind(this);
    }

    handlerInputChange(e) {
        this.props.handlerInput(e.target.value);
    }

    handlerCheckBoxChange(e) {
        this.props.handlerCheckbox(e.target.checked);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handlerInputChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handlerCheckBoxChange}
                    />
                    {' '}
                    Only in Stock
                </p>
            </form>
        );
    }

}