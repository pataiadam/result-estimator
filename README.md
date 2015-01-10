# result-estimator

### Install Postgres database

```
sudo apt-get install postgresql postgresql-contrib
```

Set a deffault password for the postgres database:
```
sudo -u postgres psql postgres
\password postgres
\q
```

### Set database connections
```
sudo -u postgres psql postgres
create database estimator;
CREATE USER estimator_user WITH PASSWORD 'kacsa123';
GRANT ALL PRIVILEGES ON DATABASE "estimator" to estimator_user;
\q
```
