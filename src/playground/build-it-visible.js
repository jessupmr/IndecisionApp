
/*          VERSION 2.0         */

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            details: 'This is the details of the visibility toggle.'
        }
        
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);    
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.isVisible ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.isVisible && (<p>{this.state.details}</p>)}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


/*          VERSION 1.0         */

// console.log('build-it-visible.js is running');

// const app = {
//     title: 'Visibility Toggle',
//     details: 'This is the detail of the visibility toggle.',
//     visible: false
// };

// const onToggle = () => {
//     app.visible = !app.visible;
//     renderApp();
// }

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onToggle}>{app.visible ? 'Hide Details' : 'Show Details'}</button>
//             {app.visible && (<p>{app.details}</p>)}            
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// renderApp();
