initSidebarItems({"enum":[["Item","Type representing either a value, a table, an array of tables, or none."],["Value","Representation of a TOML Value (as part of a Key/Value Pair)."]],"fn":[["array","Returns an empty array of tables."],["decorated","Sets the prefix and the suffix for value. # Example `rust let mut v = toml_edit::Value::from(42); assert_eq!(&v.to_string(), \"42\"); let d = toml_edit::decorated(v, \" \", \" \"); assert_eq!(&d.to_string(), \" 42 \"); `"],["table","Returns an empty table."],["value","Returns a formatted value."]],"struct":[["Array","Type representing a TOML array, payload of the `Value::Array` variant's value"],["ArrayOfTables","Type representing a TOML array of tables"],["Document","Type representing a TOML document"],["InlineTable","Type representing a TOML inline table, payload of the `Value::InlineTable` variant"],["Key","Key as part of a Key/Value Pair or a table header."],["Table","Type representing a TOML non-inline table"],["TomlError","Type representing a TOML parse error"]],"trait":[["TableLike","This trait represents either a `Table`, or an `InlineTable`."]],"type":[["Iter","An iterator type over `Table`'s key/value pairs."]]});