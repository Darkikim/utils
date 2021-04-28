# Fixed footer at the bottom of the page when content is smaller than the page

## The template
```scss
.your-body {
  // set the minimum height at the maximum viewable height by the peripheral that prints it
  min-height     : 100vh;
  display        : flex;
  flex-direction : column;

  // header & footer takes the minimum needed in the page
  > .your-header,
  > .your-footer {
    flex : 0 1 auto;
  }

  // main takes the maximum available space
  > .your-main-div {
    flex : 1 1 auto;
  }
}
```

## Real application :
```css
body {
    min-height     : 100vh;
    display        : flex;
    flex-direction : column;
}
body > header,
body > footer
{
    flex : 0 1 auto;
}
body > main {
    flex : 1 1 auto;
}
```
