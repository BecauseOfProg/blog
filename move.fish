#!/opt/homebrew/bin/fish

set DL_DIR ./static/img/members

for file in content/members/*.md
    echo $file
    set urls (rg --only-matching --multiline --no-filename -N "http.*?\.(png|jpe?g|gif|svg|webp)" "$file" | sort -u)
    for url in $urls
        echo $url
        set article_name (basename $file .md)
        set filename (basename $url)
        set filepath $DL_DIR/"$filename"
        if test -f $filepath
            # avoid collision
            set filename (date +%s)-$filename
            set filepath $DL_DIR/"$filename"
        end
        mkdir -p $DL_DIR/"$article_name"
        curl -o $filepath $url
        sed -i '' -e "s|$url|/img/articles/$filename|g" $file
    end
    echo
    echo
end
