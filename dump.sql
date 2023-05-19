PGDMP     !    "                 {            shortly    15.2    15.2     
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    32902    shortly    DATABASE     ~   CREATE DATABASE shortly WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE shortly;
                postgres    false            �            1259    32951    urls    TABLE     �   CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    short_url text NOT NULL,
    visit_count integer DEFAULT 0 NOT NULL,
    id_usuario integer NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.urls;
       public         heap    postgres    false            �            1259    32950    urls_id_seq    SEQUENCE     �   CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.urls_id_seq;
       public          postgres    false    217                       0    0    urls_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;
          public          postgres    false    216            �            1259    32904    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL,
    name text
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    32903    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    215                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    214            l           2604    32954    urls id    DEFAULT     b   ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);
 6   ALTER TABLE public.urls ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            j           2604    32907    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215                      0    32951    urls 
   TABLE DATA           V   COPY public.urls (id, url, short_url, visit_count, id_usuario, createdat) FROM stdin;
    public          postgres    false    217   �                 0    32904    users 
   TABLE DATA           E   COPY public.users (id, email, password, createdat, name) FROM stdin;
    public          postgres    false    215   �                  0    0    urls_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.urls_id_seq', 5, true);
          public          postgres    false    216                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    214            t           2606    32960    urls urls_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.urls DROP CONSTRAINT urls_pkey;
       public            postgres    false    217            p           2606    32914    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    215            r           2606    32912    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            u           2606    32961    urls urls_id_usuario_fkey    FK CONSTRAINT     {   ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.users(id);
 C   ALTER TABLE ONLY public.urls DROP CONSTRAINT urls_id_usuario_fkey;
       public          postgres    false    215    3186    217                 x����n�0����)|ʿ-��dY��G�N,Yb �R�qR�~fWs��|��|eu]VR׻�#������D�һ������IA�n��C�R��)=�f��T��i�M\d#�0���Q1`\2Cr �mP�م��j_}��0��D�ü��(>.��4��smk������2�H��\rA@X�������u���r�٣���Y�MԱW������a_��{�T�q=F�p ���  Bl^EDڳ�U�s�a�v�o�`&�oBH�	8��oc����Z         �   x�U�9�@ �NaA˄���JI�� �46@Ɲ8����B}x�T�lũ+�U
V\JE�\Cc{A~-U�y�6_>��"k�^���� [�_ò�˚�G�ܩ :e
hꆥ�����f �J��T�?�7}�zvg�\�tTa;�x2��$�ʆ�~.�i�z���@��hr$n8̵L������MeF$     