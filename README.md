Social App
=======

## YHJUST16 Avancerad Webbapplikationsutveckling 2
### Slutuppgift
### Håkan Kindström Arnoldson
### Lernia JavaScriptutevcklare YH

### [Live on GH-Pages](https://hkarn.github.io/social-app-yhjust16/)

React app made with react-create-app and using Firebase for backend. Se package.json for used modules.

This is a message board app lets users sign up with Google account or e-mail/password and make new posts to the board. Posts can be liked by other users, commented on and edited or deleted by the author or admin-users. Commments can be deleted by the author or admin but no edited. 

Styling is done with Bootstrap except for a few instances were there is some extra CSS in the React component.

---

      Firebase rules:
      {
        "rules": {
          ".read": "auth.token.admin === true || root.child('admin/' + auth.uid).exists()",
          ".write": "auth.token.admin === true || root.child('admin/' + auth.uid).exists()",
          "admin": {
            ".write": "false",
            ".read": "auth != null"
          },
          "likes": {
            ".write": "auth != null",
            ".read": "auth != null"
          },
          "users": {
            "$uid": {
              ".read": "$uid === auth.uid",
              ".write": "$uid === auth.uid"
            }
          },
          "posts": {
            ".read": "auth != null",
            "$key": {
              ".write": "newData.child('uid').val() === auth.uid || 
                  data.child('uid').val() === auth.uid",
              "likeCount": {
                ".write": "auth != null"
              }
            },
          },
          "user-posts": {
            "$uid": {
              ".read": "$uid === auth.uid",
              ".write": "$uid === auth.uid",
              "$key": {
                "likeCount" : {
                ".write": "auth != null"
                }
              }
            }
          },
          
          "comments": {
            ".read": "auth != null",
            "$postid": {
              ".write": "root.child('posts').child($postid).child('uid').val() === auth.uid",
              "$key": {
                ".write": "newData.child('uid').val() === auth.uid || 
                  data.child('uid').val() === auth.uid",
              }
            },
          },
          "user-comments": {
            "$uid": {
              ".read": "$uid === auth.uid",
              ".write": "$uid === auth.uid",
            }
          }
          
          
        }
      }


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
