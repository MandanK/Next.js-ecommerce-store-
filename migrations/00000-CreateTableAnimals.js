exports.up = async (sql) => {
  await sql`
		CREATE TABLE animals (
		id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		name varchar(40) NOT NULL,
		image varchar(80) NOT NULL,
		description varchar(500) NOT NULL
	);
	`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE animals
	`;
};
