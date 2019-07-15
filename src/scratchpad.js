handleClick(i) {
    const squares = this.props.squares.slice();
    // if (this.calculateWinner(squares) || squares[i]) {
    //   return;
    // }
    const cat = <span aria-label="a cat" role="img">🐈</span>
    const mouse = <span aria-label="a mouse" role="img">🐁</span>
    squares[i] = this.props.xIsNext ? cat : mouse;
    this.setState({
      squares: squares,
      xIsNext: !this.props.xIsNext,
    });
  }