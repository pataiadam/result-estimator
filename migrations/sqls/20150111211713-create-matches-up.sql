CREATE TABLE public.matches
(
   match_id integer NOT NULL,
   comp_id integer,
   date timestamp with time zone,
   status character(32),
   localteam_id integer,
   localteam_score integer,
   visitorteam_id integer,
   visitorteam_score integer,
   "createdAt" timestamp with time zone,
   "updatedAt" timestamp with time zone,
   CONSTRAINT matches_pkey PRIMARY KEY (match_id)
)
WITH (
  OIDS = FALSE
)
;