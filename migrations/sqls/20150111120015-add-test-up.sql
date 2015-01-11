CREATE TABLE test
(
  "id" serial NOT NULL,
  "text" text,
  "createdAt" timestamp with time zone,
  "updatedAt" timestamp with time zone,
  CONSTRAINT test_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);