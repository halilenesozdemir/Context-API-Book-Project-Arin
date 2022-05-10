import React from 'react';
import './Book.css';

class Book extends React.Component {
  render() {
    return (
      <div class="col-lg-4 col-sm-6 mb-4">
        <div class="portfolio-item">
          <a
            class="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal1"
          >
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src={this.props.book.imageURL} alt="..." />
          </a>
          <div class="portfolio-caption">
            <div class="portfolio-caption-heading">
              {this.props.book.author}
            </div>
            <div class="portfolio-caption-subheading text-muted">
              {this.props.book.title}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Book;
