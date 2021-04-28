# Noty Utils

## Default Noty with Bootstrap theme

### Default Script to print notys
```html
{% for label, messages in app.flashes %}
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            {% set count = 0 %}
            {% for message in messages %}

            new Noty({
                theme: "bootstrap-v4",
                type: '{{ label }}',
                layout: 'topRight',
                text: '{{ message|raw }}',
                timeout: 2000 + {{ count }} * 1000,
            }).show();
            {% set count = count + 1 %}
            {% endfor %}
        });
    </script>
{% endfor %}
```
[Linked File](flash-message-noty.html.twig)

## Bootstrap Noty

### Twig Display
```html
{# Alert Bootstrap : [primary, secondary, success, danger, warning, info, light, dark] #}

{% for label, messages in app.flashes %}
    <div class="flash-message-wrapper">
        <div class="container">
            {% for message in messages %}
                <div class="flash-message alert alert-{{ label }} alert-dismissible fade show" role="alert">
                    <div class="message">{{ message|raw }}</div>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            {% endfor %}
        </div>
    </div>
{% endfor %}
```
[Linked File](flash-messages-bootstrap.html.twig)


## Bulma Noty

### Twig Display

```html
{# Alert Bulma : [primary, link, info, success, warning, danger] #}

{% for label, messages in app.flashes %}
    <div class="flash-message-wrapper">
        <div class="container">
            {% for message in messages %}
                <div class="flash-message notification is-{{ label }} fade show" role="alert">
                    <button class="delete"></button>
                    <div class="message">{{ message|raw }}</div>
                </div>
            {% endfor %}
        </div>
    </div>
{% endfor %}
```
### Script that handle the bulma noty delete button
```js
<script>
    document.addEventListener('DOMContentLoaded', () => {
        (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
            const $notification = $delete.parentNode;

            $delete.addEventListener('click', () => {
                $notification.parentNode.removeChild($notification);
            });
        })
    });
</script>
```
[Linked File](flash-messages-bulma.html.twig)


