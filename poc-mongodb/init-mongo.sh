#!/bin/bash
mongo -- "$MONGO_INITDB_DATABASE" <<EOF
    var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
    var rootPassword = '$(cat "$MONGO_INITDB_ROOT_PASSWORD")';
    var admin = db.getSiblingDB('admin');
    admin.auth(rootUser, rootPassword);
    var user = '$MONGO_INITDB_USERNAME';
    var nomeBanco = '$(cat "$MONGO_INITDB_DATABASE")';
    var passwd = '$(cat "$MONGO_INITDB_PASSWORD")';

    db.createUser({user: user, pwd: passwd, roles: [{ role: 'readWrite', db: nomeBanco }]
  });
EOF