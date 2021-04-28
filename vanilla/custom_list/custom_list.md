# Custom List Style Image


## The CSS
```css
.list-picture
{
  margin-left: 1rem;
}
```

## The JS
```js
(function () {
    var lists = document.querySelectorAll('.list-picture');
    lists.forEach((list) => {
        var icon = list.dataset.picture;
        var children = list.children;
        for (var child of children) {
            child.style.listStyleImage = "url("+icon+")";
        }
    })
})();
```

## The HTML
```html
 <ul class="list-picture" data-picture="your_picture.ext">
  <li>a</li>
  <li>b</li>
  <li>c</li>
  <li>d</li>
  <li>e</li>
</ul>
```