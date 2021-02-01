app.get('/react', (req, res) => {
  res.send(
    class MyComponent extends React.Component {
      render() {
        return <div>Hello World</div>;
      }
    }

    ReactDOMServer.renderToString(<MyComponent />);
  );
});
