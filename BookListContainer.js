const Book = ({ title, img_url }) => (
  <div className="book">
    <img src={ img_url } />
    <h3>{ title }</h3>
  </div>
)
 
 
const BookList = ({ books }) => (
  <div className="book-list">
    { books.map(book => <Book title={book.title} img_url={book.image_url} />) }
  </div>
)
 
class BookListContainer extends React.Component {
  constructor() {
    super()
 
    this.state = {
      books: []
    };
  }
 
  componentDidMount() {
    fetch('/api/current_user/book_list')
      .then(response => response.json())
      .then(books => this.setState({ books }))
  }
 
  render() {
    return <BookList books={this.state.books} />
  }
}