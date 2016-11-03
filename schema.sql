--
-- Name: article; Type: TABLE; Schema: public; Owner: coco98
--

CREATE TABLE article (
    id integer NOT NULL,
    title text NOT NULL,
    heading text NOT NULL,
    date date NOT NULL,
    content text NOT NULL
);

--
-- Name: article_id_seq; Type: SEQUENCE; Schema: public; Owner: coco98
--

CREATE SEQUENCE article_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: comment; Type: TABLE; Schema: public; Owner: coco98
--

CREATE TABLE comment (
    id integer NOT NULL,
    article_id integer NOT NULL,
    user_id integer NOT NULL,
    comment text NOT NULL,
    "timestamp" timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: comment_id_seq; Type: SEQUENCE; Schema: public; Owner: coco98
--

CREATE SEQUENCE comment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user; Type: TABLE; Schema: public; Owner: coco98
--

CREATE TABLE "user" (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL
);


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: coco98
--

CREATE SEQUENCE user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: coco98
--

ALTER TABLE ONLY article ALTER COLUMN id SET DEFAULT nextval('article_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: coco98
--

ALTER TABLE ONLY comment ALTER COLUMN id SET DEFAULT nextval('comment_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: coco98
--

ALTER TABLE ONLY "user" ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);

--
-- Name: article_id; Type: CONSTRAINT; Schema: public; Owner: coco98
--

ALTER TABLE ONLY article
    ADD CONSTRAINT article_id PRIMARY KEY (id);


--
-- Name: article_title; Type: CONSTRAINT; Schema: public; Owner: coco98
--

ALTER TABLE ONLY article
    ADD CONSTRAINT article_title UNIQUE (title);


--
-- Name: comment_id; Type: CONSTRAINT; Schema: public; Owner: coco98
--

ALTER TABLE ONLY comment
    ADD CONSTRAINT comment_id PRIMARY KEY (id);


--
-- Name: user_id; Type: CONSTRAINT; Schema: public; Owner: coco98
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_id PRIMARY KEY (id);


--
-- Name: user_username; Type: CONSTRAINT; Schema: public; Owner: coco98
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_username UNIQUE (username);


--
-- Name: comment_article_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: coco98
--

ALTER TABLE ONLY comment
    ADD CONSTRAINT comment_article_id_fkey FOREIGN KEY (article_id) REFERENCES article(id);


--
-- Name: comment_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: coco98
--

ALTER TABLE ONLY comment
    ADD CONSTRAINT comment_user_id_fkey FOREIGN KEY (user_id) REFERENCES "user"(id);
