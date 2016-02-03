var Images = React.createClass({
  render: function() {
    return (
      <div id="images"></div>
    );
  }
});
React.render(
  <Images />,
  document.getElementById('content')
);