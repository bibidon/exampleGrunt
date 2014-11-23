require.config {
 paths:
  'jquery': '../vendore/jquery'
}

require ['jquery'], ($) ->
 name = 'John'

 console.log "Hello, #{name}! Greetings from CoffeeScript."
 console.log "jQuery version #{$.fn.jquery} is loaded."