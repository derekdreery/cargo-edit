(function() {var implementors = {};
implementors["serde"] = [];
implementors["serde_json"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.IntoDeserializer.html\" title=\"trait serde::de::IntoDeserializer\">IntoDeserializer</a>&lt;'de, <a class=\"struct\" href=\"serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]}];
implementors["toml"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.IntoDeserializer.html\" title=\"trait serde::de::IntoDeserializer\">IntoDeserializer</a>&lt;'de, <a class=\"struct\" href=\"toml/de/struct.Error.html\" title=\"struct toml::de::Error\">Error</a>&gt; for <a class=\"enum\" href=\"toml/value/enum.Value.html\" title=\"enum toml::value::Value\">Value</a>","synthetic":false,"types":["toml::value::Value"]},{"text":"impl&lt;'de, 'b&gt; <a class=\"trait\" href=\"serde/de/trait.IntoDeserializer.html\" title=\"trait serde::de::IntoDeserializer\">IntoDeserializer</a>&lt;'de, <a class=\"struct\" href=\"toml/de/struct.Error.html\" title=\"struct toml::de::Error\">Error</a>&gt; for &amp;'b mut <a class=\"struct\" href=\"toml/de/struct.Deserializer.html\" title=\"struct toml::de::Deserializer\">Deserializer</a>&lt;'de&gt;","synthetic":false,"types":["toml::de::Deserializer"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()