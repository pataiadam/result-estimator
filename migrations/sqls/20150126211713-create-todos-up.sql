CREATE TABLE public.todos
(
   todos_id serial NOT NULL,
   title character(32),
   content character(256),
   date timestamp with time zone,
   longitude decimal,
   latitude decimal,
   "createdAt" timestamp with time zone,
   "updatedAt" timestamp with time zone,
   CONSTRAINT todos_pkey PRIMARY KEY (todos_id)
)
WITH (
  OIDS = FALSE
)
;