# Approach

I decided to use whatever is available to allow me to produce this simple app as quick as possible.

* I cloned and modified the angular-seed project
* I am using bootstrap styles
* I used a localStorage angular service for persisting selected images
 
# Other notes
 * Assets are not concatenated and minified
 * does not validate because of the angular ng-attributes
 * I called the active class 'photo-active' instead of 'selected'
 * I moved the Flickr API call inside an angular service
 * Improvements could have been made by having preloaders and better styles
 * It could have been written test first (but seems pointless as there is very little to test!)
