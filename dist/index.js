var React = require('react');

var HomeComponent = function HomeComponent(props) {
  return React.createElement("div", null, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "jumbotron p-3 p-md-5 text-white rounded bg-dark"
  }, React.createElement("div", {
    className: "col-md-6 px-0"
  }, React.createElement("h1", {
    className: "display-4 font-italic"
  }, "Home Page from The React component"), React.createElement("p", {
    className: "lead my-3"
  }, "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."), React.createElement("p", {
    className: "lead mb-0"
  }, React.createElement("a", {
    onClick: function onClick() {
      return props.gotolink("other");
    },
    className: "text-white font-weight-bold"
  }, "Other Page...")))), React.createElement("div", {
    className: "row mb-2"
  }, React.createElement("div", {
    className: "col-md-6"
  }, React.createElement("div", {
    className: "card flex-md-row mb-4 shadow-sm h-md-250"
  }, React.createElement("div", {
    className: "card-body d-flex flex-column align-items-start"
  }, React.createElement("strong", {
    className: "d-inline-block mb-2 text-primary"
  }, "World"), React.createElement("h3", {
    className: "mb-0"
  }, React.createElement("a", {
    className: "text-dark",
    href: "#"
  }, "Featured post")), React.createElement("div", {
    className: "mb-1 text-muted"
  }, "Nov 12"), React.createElement("p", {
    className: "card-text mb-auto"
  }, "This is a wider card with supporting text below as a natural lead-in to additional content."), React.createElement("a", {
    href: "#"
  }, "Continue reading")), React.createElement("img", {
    className: "card-img-right flex-auto d-none d-lg-block",
    "data-src": "holder.js/200x250?theme=thumb",
    alt: "Card image cap"
  }))), React.createElement("div", {
    className: "col-md-6"
  }, React.createElement("div", {
    className: "card flex-md-row mb-4 shadow-sm h-md-250"
  }, React.createElement("div", {
    className: "card-body d-flex flex-column align-items-start"
  }, React.createElement("strong", {
    className: "d-inline-block mb-2 text-success"
  }, "Design"), React.createElement("h3", {
    className: "mb-0"
  }, React.createElement("a", {
    className: "text-dark",
    href: "#"
  }, "Post title")), React.createElement("div", {
    className: "mb-1 text-muted"
  }, "Nov 11"), React.createElement("p", {
    className: "card-text mb-auto"
  }, "This is a wider card with supporting text below as a natural lead-in to additional content."), React.createElement("a", {
    href: "#"
  }, "Continue reading")), React.createElement("img", {
    className: "card-img-right flex-auto d-none d-lg-block",
    "data-src": "holder.js/200x250?theme=thumb",
    alt: "Card image cap"
  }))))), React.createElement("main", {
    role: "main",
    className: "container"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-md-8 blog-main"
  }, React.createElement("h3", {
    className: "pb-3 mb-4 font-italic border-bottom"
  }, "From the Firehose"), React.createElement("div", {
    className: "blog-post"
  }, React.createElement("h2", {
    className: "blog-post-title"
  }, "Sample blog post"), React.createElement("p", {
    className: "blog-post-meta"
  }, "January 1, 2014 by ", React.createElement("a", {
    href: "#"
  }, "Mark")), React.createElement("p", null, "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported."), React.createElement("hr", null), React.createElement("p", null, "Cum sociis natoque penatibus et magnis ", React.createElement("a", {
    href: "#"
  }, "dis parturient montes"), ", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."), React.createElement("blockquote", null, React.createElement("p", null, "Curabitur blandit tempus porttitor. ", React.createElement("strong", null, "Nullam quis risus eget urna mollis"), " ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.")), React.createElement("p", null, "Etiam porta ", React.createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."), React.createElement("h2", null, "Heading"), React.createElement("p", null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), React.createElement("h3", null, "Sub-heading"), React.createElement("p", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), React.createElement("pre", null, React.createElement("code", null, "Example code block")), React.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa."), React.createElement("h3", null, "Sub-heading"), React.createElement("p", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."), React.createElement("ul", null, React.createElement("li", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et."), React.createElement("li", null, "Donec id elit non mi porta gravida at eget metus."), React.createElement("li", null, "Nulla vitae elit libero, a pharetra augue.")), React.createElement("p", null, "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."), React.createElement("ol", null, React.createElement("li", null, "Vestibulum id ligula porta felis euismod semper."), React.createElement("li", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), React.createElement("li", null, "Maecenas sed diam eget risus varius blandit sit amet non magna.")), React.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.")), React.createElement("div", {
    className: "blog-post"
  }, React.createElement("h2", {
    className: "blog-post-title"
  }, "Another blog post"), React.createElement("p", {
    className: "blog-post-meta"
  }, "December 23, 2013 by ", React.createElement("a", {
    href: "#"
  }, "Jacob")), React.createElement("p", null, "Cum sociis natoque penatibus et magnis ", React.createElement("a", {
    href: "#"
  }, "dis parturient montes"), ", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."), React.createElement("blockquote", null, React.createElement("p", null, "Curabitur blandit tempus porttitor. ", React.createElement("strong", null, "Nullam quis risus eget urna mollis"), " ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.")), React.createElement("p", null, "Etiam porta ", React.createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."), React.createElement("p", null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.")), React.createElement("div", {
    className: "blog-post"
  }, React.createElement("h2", {
    className: "blog-post-title"
  }, "New feature"), React.createElement("p", {
    className: "blog-post-meta"
  }, "December 14, 2013 by ", React.createElement("a", {
    href: "#"
  }, "Chris")), React.createElement("p", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."), React.createElement("ul", null, React.createElement("li", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et."), React.createElement("li", null, "Donec id elit non mi porta gravida at eget metus."), React.createElement("li", null, "Nulla vitae elit libero, a pharetra augue.")), React.createElement("p", null, "Etiam porta ", React.createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."), React.createElement("p", null, "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.")), React.createElement("nav", {
    className: "blog-pagination"
  }, React.createElement("a", {
    className: "btn btn-outline-primary",
    href: "#"
  }, "Older"), React.createElement("a", {
    className: "btn btn-outline-secondary disabled",
    href: "#"
  }, "Newer"))), React.createElement("aside", {
    className: "col-md-4 blog-sidebar"
  }, React.createElement("div", {
    className: "p-3 mb-3 bg-light rounded"
  }, React.createElement("h4", {
    className: "font-italic"
  }, "About"), React.createElement("p", {
    className: "mb-0"
  }, "Etiam porta ", React.createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.")), React.createElement("div", {
    className: "p-3"
  }, React.createElement("h4", {
    className: "font-italic"
  }, "Archives"), React.createElement("ol", {
    className: "list-unstyled mb-0"
  }, React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "March 2014")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "February 2014")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "January 2014")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "December 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "November 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "October 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "September 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "August 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "July 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "June 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "May 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "April 2013")))), React.createElement("div", {
    className: "p-3"
  }, React.createElement("h4", {
    className: "font-italic"
  }, "Elsewhere"), React.createElement("ol", {
    className: "list-unstyled"
  }, React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "GitHub")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "Twitter")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "Facebook"))))))));
};

var OtherComponent = function OtherComponent(props) {
  return React.createElement("div", null, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "jumbotron p-3 p-md-5 text-white rounded bg-dark"
  }, React.createElement("div", {
    className: "col-md-6 px-0"
  }, React.createElement("h1", {
    className: "display-4 font-italic"
  }, "This is Other Page from The React component"), React.createElement("p", {
    className: "lead my-3"
  }, "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."), React.createElement("p", {
    className: "lead mb-0"
  }, React.createElement("a", {
    onClick: function onClick() {
      return props.gotolink("home");
    },
    className: "text-white font-weight-bold"
  }, "Home Page...")))), React.createElement("div", {
    className: "row mb-2"
  }, React.createElement("div", {
    className: "col-md-6"
  }, React.createElement("div", {
    className: "card flex-md-row mb-4 shadow-sm h-md-250"
  }, React.createElement("div", {
    className: "card-body d-flex flex-column align-items-start"
  }, React.createElement("strong", {
    className: "d-inline-block mb-2 text-primary"
  }, "World"), React.createElement("h3", {
    className: "mb-0"
  }, React.createElement("a", {
    className: "text-dark",
    href: "#"
  }, "Featured post")), React.createElement("div", {
    className: "mb-1 text-muted"
  }, "Nov 12"), React.createElement("p", {
    className: "card-text mb-auto"
  }, "This is a wider card with supporting text below as a natural lead-in to additional content."), React.createElement("a", {
    href: "#"
  }, "Continue reading")), React.createElement("img", {
    className: "card-img-right flex-auto d-none d-lg-block",
    "data-src": "holder.js/200x250?theme=thumb",
    alt: "Card image cap"
  }))), React.createElement("div", {
    className: "col-md-6"
  }, React.createElement("div", {
    className: "card flex-md-row mb-4 shadow-sm h-md-250"
  }, React.createElement("div", {
    className: "card-body d-flex flex-column align-items-start"
  }, React.createElement("strong", {
    className: "d-inline-block mb-2 text-success"
  }, "Design"), React.createElement("h3", {
    className: "mb-0"
  }, React.createElement("a", {
    className: "text-dark",
    href: "#"
  }, "Post title")), React.createElement("div", {
    className: "mb-1 text-muted"
  }, "Nov 11"), React.createElement("p", {
    className: "card-text mb-auto"
  }, "This is a wider card with supporting text below as a natural lead-in to additional content."), React.createElement("a", {
    href: "#"
  }, "Continue reading")), React.createElement("img", {
    className: "card-img-right flex-auto d-none d-lg-block",
    "data-src": "holder.js/200x250?theme=thumb",
    alt: "Card image cap"
  }))))), React.createElement("main", {
    role: "main",
    className: "container"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-md-8 blog-main"
  }, React.createElement("h3", {
    className: "pb-3 mb-4 font-italic border-bottom"
  }, "From the Firehose"), React.createElement("div", {
    className: "blog-post"
  }, React.createElement("h2", {
    className: "blog-post-title"
  }, "Sample blog post"), React.createElement("p", {
    className: "blog-post-meta"
  }, "January 1, 2014 by ", React.createElement("a", {
    href: "#"
  }, "Mark")), React.createElement("p", null, "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported."), React.createElement("hr", null), React.createElement("p", null, "Cum sociis natoque penatibus et magnis ", React.createElement("a", {
    href: "#"
  }, "dis parturient montes"), ", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."), React.createElement("blockquote", null, React.createElement("p", null, "Curabitur blandit tempus porttitor. ", React.createElement("strong", null, "Nullam quis risus eget urna mollis"), " ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.")), React.createElement("p", null, "Etiam porta ", React.createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."), React.createElement("h2", null, "Heading"), React.createElement("p", null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), React.createElement("h3", null, "Sub-heading"), React.createElement("p", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), React.createElement("pre", null, React.createElement("code", null, "Example code block")), React.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa."), React.createElement("h3", null, "Sub-heading"), React.createElement("p", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."), React.createElement("ul", null, React.createElement("li", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et."), React.createElement("li", null, "Donec id elit non mi porta gravida at eget metus."), React.createElement("li", null, "Nulla vitae elit libero, a pharetra augue.")), React.createElement("p", null, "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."), React.createElement("ol", null, React.createElement("li", null, "Vestibulum id ligula porta felis euismod semper."), React.createElement("li", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), React.createElement("li", null, "Maecenas sed diam eget risus varius blandit sit amet non magna.")), React.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.")), React.createElement("div", {
    className: "blog-post"
  }, React.createElement("h2", {
    className: "blog-post-title"
  }, "Another blog post"), React.createElement("p", {
    className: "blog-post-meta"
  }, "December 23, 2013 by ", React.createElement("a", {
    href: "#"
  }, "Jacob")), React.createElement("p", null, "Cum sociis natoque penatibus et magnis ", React.createElement("a", {
    href: "#"
  }, "dis parturient montes"), ", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."), React.createElement("blockquote", null, React.createElement("p", null, "Curabitur blandit tempus porttitor. ", React.createElement("strong", null, "Nullam quis risus eget urna mollis"), " ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.")), React.createElement("p", null, "Etiam porta ", React.createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."), React.createElement("p", null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.")), React.createElement("div", {
    className: "blog-post"
  }, React.createElement("h2", {
    className: "blog-post-title"
  }, "New feature"), React.createElement("p", {
    className: "blog-post-meta"
  }, "December 14, 2013 by ", React.createElement("a", {
    href: "#"
  }, "Chris")), React.createElement("p", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."), React.createElement("ul", null, React.createElement("li", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et."), React.createElement("li", null, "Donec id elit non mi porta gravida at eget metus."), React.createElement("li", null, "Nulla vitae elit libero, a pharetra augue.")), React.createElement("p", null, "Etiam porta ", React.createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."), React.createElement("p", null, "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.")), React.createElement("nav", {
    className: "blog-pagination"
  }, React.createElement("a", {
    className: "btn btn-outline-primary",
    href: "#"
  }, "Older"), React.createElement("a", {
    className: "btn btn-outline-secondary disabled",
    href: "#"
  }, "Newer"))), React.createElement("aside", {
    className: "col-md-4 blog-sidebar"
  }, React.createElement("div", {
    className: "p-3 mb-3 bg-light rounded"
  }, React.createElement("h4", {
    className: "font-italic"
  }, "About"), React.createElement("p", {
    className: "mb-0"
  }, "Etiam porta ", React.createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.")), React.createElement("div", {
    className: "p-3"
  }, React.createElement("h4", {
    className: "font-italic"
  }, "Archives"), React.createElement("ol", {
    className: "list-unstyled mb-0"
  }, React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "March 2014")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "February 2014")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "January 2014")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "December 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "November 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "October 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "September 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "August 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "July 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "June 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "May 2013")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "April 2013")))), React.createElement("div", {
    className: "p-3"
  }, React.createElement("h4", {
    className: "font-italic"
  }, "Elsewhere"), React.createElement("ol", {
    className: "list-unstyled"
  }, React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "GitHub")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "Twitter")), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, "Facebook"))))))));
};

exports.HomeComponent = HomeComponent;
exports.OtherComponent = OtherComponent;
//# sourceMappingURL=index.js.map
