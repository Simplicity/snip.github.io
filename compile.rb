require 'listen'

def compile partial
  template = File.read("templates/template.html")
  partial_content = File.read("templates/#{partial}")

  output = template.gsub(/%placeholder%/, partial_content)

  File.write(partial, output)
end

listener = Listen.to('./templates') do
  puts "compiling..."
  compile("index.html")
  compile("support.html")
  compile("privacy.html")
  compile("terms.html")
end

listener.start

sleep
