require 'listen'

def compile partial_name, title, description
  output = File.read("templates/template.html")

  content = File.read("templates/#{partial_name}.html")

  output = output.gsub(/%content%/, content)
  output = output.gsub(/%title%/, title)
  output = output.gsub(/%description%/, description)
  output = output.gsub(/%partial_name%/, partial_name)

  File.write("#{partial_name}.html", output)
end

listener = Listen.to('./templates') do
  puts "compiling..."
  compile("index", "Snip - The Notes App with a focus on productivity", "Snip - The Notes App with a focus on productivity. Snip is an alternative to Google Keep, Evernote, Notion, Bear, and other Notes Apps alike.")
  compile("support", "Snip - Support", "Snip - Support")
  compile("privacy", "Snip - Privacy", "Snip - Privacy")
  compile("terms", "Snip - Terms", "Snip - Terms")
end

listener.start

sleep
