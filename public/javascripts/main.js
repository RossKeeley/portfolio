window.addEventListener('scroll', () => {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// app.get('/react', (req, res) => {
//   res.send(
//     class MyComponent extends React.Component {
//       render() {
//         return <div>Hello World</div>;
//       }
//     }
//
//     ReactDOMServer.renderToString(<MyComponent />);
//   );
// });
