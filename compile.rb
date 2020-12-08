require 'listen'

def compile partial, title, description
  output = File.read("templates/template.html")

  content = File.read("templates/#{partial}")

  output = output.gsub(/%content%/, content)
  output = output.gsub(/%title%/, title)
  output = output.gsub(/%description%/, description)

  File.write(partial, output)
end

listener = Listen.to('./templates') do
  puts "compiling..."
  compile("index.html", "Snip - The Notes App with a focus on productivity", "Snip - The Notes App with a focus on productivity.")
  compile("support.html", "Snip - Support", "Snip - Support")
  compile("privacy.html", "Snip - Privacy", "Snip - Privacy")
  compile("terms.html", "Snip - Terms", "Snip - Terms")
end

listener.start

sleep
