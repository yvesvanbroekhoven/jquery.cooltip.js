namespace :release do
  
  task :patch do
    File.open('test.js', 'r+') do |f|
      lines = f.readlines
      lines.each do |line|
        version = line.match(/(\*\sVersion:\s*)(\d+).(\d+).(\d+)/i)
        unless version.nil?
          bumped       = ($4.to_i + 1).to_s
          @version_nr  = "#{$2}.#{$3}.#{bumped}"
          line.gsub!(/\*\sVersion:\s*\d+.\d+.\d+/i, $1 + $2 + '.' + $3 + '.' + bumped)
        end
      end
      f.pos = 0
      f.print lines.join
      f.truncate(f.pos)
    end
    sh %{git tag -a v#{@version_nr} -m "Bumped version to #{@version_nr}"}
    sh %{git add .}
    sh %{git add -u}
    sh %{git push --tags}
  end
  
  task :minor do
    
    File.open('test.js', 'r+') do |f|
      lines = f.readlines
      lines.each do |line|
        version = line.match(/(\*\sVersion:\s*)(\d+).(\d+).(\d+)/i)
        unless version.nil?
          bumped       = ($3.to_i + 1).to_s
          @version_nr  = "#{$2}.#{bumped}.#{$4}"
          line.gsub!(/\*\sVersion:\s*\d+.\d+.\d+/i, $1 + $2 + '.' + bumped + '.' + $4)
        end
      end
      puts lines.join
      f.pos = 0
      f.print lines.join
      f.truncate(f.pos)
    end
    sh %{git tag -a v#{@version_nr} -m "Bumped version to #{@version_nr}"}
    sh %{git add .}
    sh %{git add -u}
    sh %{git push --tags}
  end
  
  task :major do
    
    File.open('test.js', 'r+') do |f|
      lines = f.readlines
      lines.each do |line|
        version = line.match(/(\*\sVersion:\s*)(\d+).(\d+).(\d+)/i)
        unless version.nil?
          bumped       = ($2.to_i + 1).to_s
          @version_nr  = "#{bumped}.0.0"
          line.gsub!(/\*\sVersion:\s*\d+.\d+.\d+/i, $1 + bumped + '.0.0')
        end
      end
      puts lines.join
      f.pos = 0
      f.print lines.join
      f.truncate(f.pos)
    end
    sh %{git tag -a v#{@version_nr} -m "Bumped version to #{@version_nr}"}
    sh %{git add .}
    sh %{git add -u}
    sh %{git push --tags}
  end
  
end