const React = require("react");

class BtnCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: 0};
        this.incrimentCounter = this.incrimentCounter.bind(this);
    }
    incrimentCounter(){
        this.state.value++;
        let newValue = this.state.value++;
        this.setState({value:newValue});
        //console.log(this.state.value);
    }
    render() {
        return <div>
            <button onClick={this.incrimentCounter}>Counter++</button>
            <b>counter: {this.state.value}</b>
        </div>
    }
}
module.exports = BtnCounter;