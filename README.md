# Headless Wordpress Boilerplate with Next.js

Headless Wordpress, Next.js (React.js) boilerplate

Demo: `https://nextpressboilerplate.com`

### Intallation:

Must have a standalone Wordpress installation already.

- Run `git clone https://github.com/reginpv/nextpress.git .`.
- Run `npm i`.
- Run `npm run dev`.

### Wordpress setup instruction

- Update `site address` value so main site url will be updated to your Next.js intallation.
- Add below to your current template's function.php, this will pull menu to template's Navbar component and populate menu items with Wordpress' menu named `Main Navigation`. (must be named Main Navigation)

```
function get_my_menu() {
	// Replace your menu name, slug or ID carefully
	return wp_get_nav_menu_items('Main Navigation');
}
add_action( 'rest_api_init', function () {
	register_rest_route( 'wp/v2', 'menu', array(
		'methods' => 'GET',
		'callback' => 'get_my_menu',
	));
});
```

### References:

Wordpress api reference
https://developer.wordpress.org/rest-api/reference/