import { createElement } from 'react';

const HomeComponent = props => {
  return createElement("div", null, createElement("div", {
    className: "container"
  }, createElement("div", {
    className: "jumbotron p-3 p-md-5 text-white rounded bg-dark"
  }, createElement("div", {
    className: "col-md-6 px-0"
  }, createElement("h1", {
    className: "display-4 font-italic"
  }, "Home Page from The React component"), createElement("p", {
    className: "lead my-3"
  }, "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."), createElement("p", {
    className: "lead mb-0"
  }, createElement("a", {
    onClick: () => props.gotolink("other"),
    className: "text-white font-weight-bold"
  }, "Other Page...")))), createElement("div", {
    className: "row mb-2"
  }, createElement("div", {
    className: "col-md-6"
  }, createElement("div", {
    className: "card flex-md-row mb-4 shadow-sm h-md-250"
  }, createElement("div", {
    className: "card-body d-flex flex-column align-items-start"
  }, createElement("strong", {
    className: "d-inline-block mb-2 text-primary"
  }, "World"), createElement("h3", {
    className: "mb-0"
  }, createElement("a", {
    className: "text-dark",
    href: "#"
  }, "Featured post")), createElement("div", {
    className: "mb-1 text-muted"
  }, "Nov 12"), createElement("p", {
    className: "card-text mb-auto"
  }, "This is a wider card with supporting text below as a natural lead-in to additional content."), createElement("a", {
    href: "#"
  }, "Continue reading")), createElement("img", {
    className: "card-img-right flex-auto d-none d-lg-block",
    "data-src": "holder.js/200x250?theme=thumb",
    alt: "Card image cap"
  }))), createElement("div", {
    className: "col-md-6"
  }, createElement("div", {
    className: "card flex-md-row mb-4 shadow-sm h-md-250"
  }, createElement("div", {
    className: "card-body d-flex flex-column align-items-start"
  }, createElement("strong", {
    className: "d-inline-block mb-2 text-success"
  }, "Design"), createElement("h3", {
    className: "mb-0"
  }, createElement("a", {
    className: "text-dark",
    href: "#"
  }, "Post title")), createElement("div", {
    className: "mb-1 text-muted"
  }, "Nov 11"), createElement("p", {
    className: "card-text mb-auto"
  }, "This is a wider card with supporting text below as a natural lead-in to additional content."), createElement("a", {
    href: "#"
  }, "Continue reading")), createElement("img", {
    className: "card-img-right flex-auto d-none d-lg-block",
    "data-src": "holder.js/200x250?theme=thumb",
    alt: "Card image cap"
  }))))), createElement("main", {
    role: "main",
    className: "container"
  }, createElement("div", {
    className: "row"
  }, createElement("div", {
    className: "col-md-8 blog-main"
  }, createElement("h3", {
    className: "pb-3 mb-4 font-italic border-bottom"
  }, "From the Firehose"), createElement("div", {
    className: "blog-post"
  }, createElement("h2", {
    className: "blog-post-title"
  }, "Sample blog post"), createElement("p", {
    className: "blog-post-meta"
  }, "January 1, 2014 by ", createElement("a", {
    href: "#"
  }, "Mark")), createElement("p", null, "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported."), createElement("hr", null), createElement("p", null, "Cum sociis natoque penatibus et magnis ", createElement("a", {
    href: "#"
  }, "dis parturient montes"), ", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."), createElement("blockquote", null, createElement("p", null, "Curabitur blandit tempus porttitor. ", createElement("strong", null, "Nullam quis risus eget urna mollis"), " ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.")), createElement("p", null, "Etiam porta ", createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."), createElement("h2", null, "Heading"), createElement("p", null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), createElement("h3", null, "Sub-heading"), createElement("p", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), createElement("pre", null, createElement("code", null, "Example code block")), createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa."), createElement("h3", null, "Sub-heading"), createElement("p", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."), createElement("ul", null, createElement("li", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et."), createElement("li", null, "Donec id elit non mi porta gravida at eget metus."), createElement("li", null, "Nulla vitae elit libero, a pharetra augue.")), createElement("p", null, "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."), createElement("ol", null, createElement("li", null, "Vestibulum id ligula porta felis euismod semper."), createElement("li", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), createElement("li", null, "Maecenas sed diam eget risus varius blandit sit amet non magna.")), createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.")), createElement("div", {
    className: "blog-post"
  }, createElement("h2", {
    className: "blog-post-title"
  }, "Another blog post"), createElement("p", {
    className: "blog-post-meta"
  }, "December 23, 2013 by ", createElement("a", {
    href: "#"
  }, "Jacob")), createElement("p", null, "Cum sociis natoque penatibus et magnis ", createElement("a", {
    href: "#"
  }, "dis parturient montes"), ", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."), createElement("blockquote", null, createElement("p", null, "Curabitur blandit tempus porttitor. ", createElement("strong", null, "Nullam quis risus eget urna mollis"), " ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.")), createElement("p", null, "Etiam porta ", createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."), createElement("p", null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.")), createElement("div", {
    className: "blog-post"
  }, createElement("h2", {
    className: "blog-post-title"
  }, "New feature"), createElement("p", {
    className: "blog-post-meta"
  }, "December 14, 2013 by ", createElement("a", {
    href: "#"
  }, "Chris")), createElement("p", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."), createElement("ul", null, createElement("li", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et."), createElement("li", null, "Donec id elit non mi porta gravida at eget metus."), createElement("li", null, "Nulla vitae elit libero, a pharetra augue.")), createElement("p", null, "Etiam porta ", createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."), createElement("p", null, "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.")), createElement("nav", {
    className: "blog-pagination"
  }, createElement("a", {
    className: "btn btn-outline-primary",
    href: "#"
  }, "Older"), createElement("a", {
    className: "btn btn-outline-secondary disabled",
    href: "#"
  }, "Newer"))), createElement("aside", {
    className: "col-md-4 blog-sidebar"
  }, createElement("div", {
    className: "p-3 mb-3 bg-light rounded"
  }, createElement("h4", {
    className: "font-italic"
  }, "About"), createElement("p", {
    className: "mb-0"
  }, "Etiam porta ", createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.")), createElement("div", {
    className: "p-3"
  }, createElement("h4", {
    className: "font-italic"
  }, "Archives"), createElement("ol", {
    className: "list-unstyled mb-0"
  }, createElement("li", null, createElement("a", {
    href: "#"
  }, "March 2014")), createElement("li", null, createElement("a", {
    href: "#"
  }, "February 2014")), createElement("li", null, createElement("a", {
    href: "#"
  }, "January 2014")), createElement("li", null, createElement("a", {
    href: "#"
  }, "December 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "November 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "October 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "September 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "August 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "July 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "June 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "May 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "April 2013")))), createElement("div", {
    className: "p-3"
  }, createElement("h4", {
    className: "font-italic"
  }, "Elsewhere"), createElement("ol", {
    className: "list-unstyled"
  }, createElement("li", null, createElement("a", {
    href: "#"
  }, "GitHub")), createElement("li", null, createElement("a", {
    href: "#"
  }, "Twitter")), createElement("li", null, createElement("a", {
    href: "#"
  }, "Facebook"))))))));
};

const OtherComponent = props => {
  return createElement("div", null, createElement("div", {
    className: "container"
  }, createElement("div", {
    className: "jumbotron p-3 p-md-5 text-white rounded bg-dark"
  }, createElement("div", {
    className: "col-md-6 px-0"
  }, createElement("h1", {
    className: "display-4 font-italic"
  }, "This is Other Page from The React component"), createElement("p", {
    className: "lead my-3"
  }, "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."), createElement("p", {
    className: "lead mb-0"
  }, createElement("a", {
    onClick: () => props.gotolink("home"),
    className: "text-white font-weight-bold"
  }, "Home Page...")))), createElement("div", {
    className: "row mb-2"
  }, createElement("div", {
    className: "col-md-6"
  }, createElement("div", {
    className: "card flex-md-row mb-4 shadow-sm h-md-250"
  }, createElement("div", {
    className: "card-body d-flex flex-column align-items-start"
  }, createElement("strong", {
    className: "d-inline-block mb-2 text-primary"
  }, "World"), createElement("h3", {
    className: "mb-0"
  }, createElement("a", {
    className: "text-dark",
    href: "#"
  }, "Featured post")), createElement("div", {
    className: "mb-1 text-muted"
  }, "Nov 12"), createElement("p", {
    className: "card-text mb-auto"
  }, "This is a wider card with supporting text below as a natural lead-in to additional content."), createElement("a", {
    href: "#"
  }, "Continue reading")), createElement("img", {
    className: "card-img-right flex-auto d-none d-lg-block",
    "data-src": "holder.js/200x250?theme=thumb",
    alt: "Card image cap"
  }))), createElement("div", {
    className: "col-md-6"
  }, createElement("div", {
    className: "card flex-md-row mb-4 shadow-sm h-md-250"
  }, createElement("div", {
    className: "card-body d-flex flex-column align-items-start"
  }, createElement("strong", {
    className: "d-inline-block mb-2 text-success"
  }, "Design"), createElement("h3", {
    className: "mb-0"
  }, createElement("a", {
    className: "text-dark",
    href: "#"
  }, "Post title")), createElement("div", {
    className: "mb-1 text-muted"
  }, "Nov 11"), createElement("p", {
    className: "card-text mb-auto"
  }, "This is a wider card with supporting text below as a natural lead-in to additional content."), createElement("a", {
    href: "#"
  }, "Continue reading")), createElement("img", {
    className: "card-img-right flex-auto d-none d-lg-block",
    "data-src": "holder.js/200x250?theme=thumb",
    alt: "Card image cap"
  }))))), createElement("main", {
    role: "main",
    className: "container"
  }, createElement("div", {
    className: "row"
  }, createElement("div", {
    className: "col-md-8 blog-main"
  }, createElement("h3", {
    className: "pb-3 mb-4 font-italic border-bottom"
  }, "From the Firehose"), createElement("div", {
    className: "blog-post"
  }, createElement("h2", {
    className: "blog-post-title"
  }, "Sample blog post"), createElement("p", {
    className: "blog-post-meta"
  }, "January 1, 2014 by ", createElement("a", {
    href: "#"
  }, "Mark")), createElement("p", null, "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported."), createElement("hr", null), createElement("p", null, "Cum sociis natoque penatibus et magnis ", createElement("a", {
    href: "#"
  }, "dis parturient montes"), ", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."), createElement("blockquote", null, createElement("p", null, "Curabitur blandit tempus porttitor. ", createElement("strong", null, "Nullam quis risus eget urna mollis"), " ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.")), createElement("p", null, "Etiam porta ", createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."), createElement("h2", null, "Heading"), createElement("p", null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), createElement("h3", null, "Sub-heading"), createElement("p", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), createElement("pre", null, createElement("code", null, "Example code block")), createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa."), createElement("h3", null, "Sub-heading"), createElement("p", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."), createElement("ul", null, createElement("li", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et."), createElement("li", null, "Donec id elit non mi porta gravida at eget metus."), createElement("li", null, "Nulla vitae elit libero, a pharetra augue.")), createElement("p", null, "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."), createElement("ol", null, createElement("li", null, "Vestibulum id ligula porta felis euismod semper."), createElement("li", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), createElement("li", null, "Maecenas sed diam eget risus varius blandit sit amet non magna.")), createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.")), createElement("div", {
    className: "blog-post"
  }, createElement("h2", {
    className: "blog-post-title"
  }, "Another blog post"), createElement("p", {
    className: "blog-post-meta"
  }, "December 23, 2013 by ", createElement("a", {
    href: "#"
  }, "Jacob")), createElement("p", null, "Cum sociis natoque penatibus et magnis ", createElement("a", {
    href: "#"
  }, "dis parturient montes"), ", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."), createElement("blockquote", null, createElement("p", null, "Curabitur blandit tempus porttitor. ", createElement("strong", null, "Nullam quis risus eget urna mollis"), " ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.")), createElement("p", null, "Etiam porta ", createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."), createElement("p", null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.")), createElement("div", {
    className: "blog-post"
  }, createElement("h2", {
    className: "blog-post-title"
  }, "New feature"), createElement("p", {
    className: "blog-post-meta"
  }, "December 14, 2013 by ", createElement("a", {
    href: "#"
  }, "Chris")), createElement("p", null, "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."), createElement("ul", null, createElement("li", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et."), createElement("li", null, "Donec id elit non mi porta gravida at eget metus."), createElement("li", null, "Nulla vitae elit libero, a pharetra augue.")), createElement("p", null, "Etiam porta ", createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."), createElement("p", null, "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.")), createElement("nav", {
    className: "blog-pagination"
  }, createElement("a", {
    className: "btn btn-outline-primary",
    href: "#"
  }, "Older"), createElement("a", {
    className: "btn btn-outline-secondary disabled",
    href: "#"
  }, "Newer"))), createElement("aside", {
    className: "col-md-4 blog-sidebar"
  }, createElement("div", {
    className: "p-3 mb-3 bg-light rounded"
  }, createElement("h4", {
    className: "font-italic"
  }, "About"), createElement("p", {
    className: "mb-0"
  }, "Etiam porta ", createElement("em", null, "sem malesuada magna"), " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.")), createElement("div", {
    className: "p-3"
  }, createElement("h4", {
    className: "font-italic"
  }, "Archives"), createElement("ol", {
    className: "list-unstyled mb-0"
  }, createElement("li", null, createElement("a", {
    href: "#"
  }, "March 2014")), createElement("li", null, createElement("a", {
    href: "#"
  }, "February 2014")), createElement("li", null, createElement("a", {
    href: "#"
  }, "January 2014")), createElement("li", null, createElement("a", {
    href: "#"
  }, "December 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "November 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "October 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "September 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "August 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "July 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "June 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "May 2013")), createElement("li", null, createElement("a", {
    href: "#"
  }, "April 2013")))), createElement("div", {
    className: "p-3"
  }, createElement("h4", {
    className: "font-italic"
  }, "Elsewhere"), createElement("ol", {
    className: "list-unstyled"
  }, createElement("li", null, createElement("a", {
    href: "#"
  }, "GitHub")), createElement("li", null, createElement("a", {
    href: "#"
  }, "Twitter")), createElement("li", null, createElement("a", {
    href: "#"
  }, "Facebook"))))))));
};

export { HomeComponent, OtherComponent };
//# sourceMappingURL=index.modern.js.map
