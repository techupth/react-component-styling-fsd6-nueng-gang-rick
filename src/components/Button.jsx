// Start coding here
function Button(props) {
    return (
          <button className="button"
          style={{
             width: '171.19px',
             height: '50px',
             fontSize: '16px',
             border : 'none',
             color : 'white',
             textAlign: 'center',
             backgroundColor: props.style,
           }}>
              {props.Button}
          </button>
    );
  }

export default Button