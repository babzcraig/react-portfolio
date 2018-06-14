# # Create the Heroku app; requires free account at https://www.heroku.com/
# heroku create -b https://github.com/heroku/heroku-buildpack-static.git

# # Set the web root to the build/ directory
# echo '{ "root": "build/" }' > static.json
# # Allow JS bundle to be committed (removes `build` from ignores)
# sed '/build/d' .gitignore > .gitignore.new && mv .gitignore.new .gitignore

# # Uncomment out the lines above if this is the first time running the app

npm run build
git add .
now=$(date +"%D:%r")
git commit -m 'deploying to heroku:'"$now"''
git push heroku master
heroku open
