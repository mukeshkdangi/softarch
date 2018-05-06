var data = {
	"levelOne": [
		{
			"category": "io",
			"dependency": [
				{
					"nameOfCategory": "io",
					"count": 11
				},
				{
					"nameOfCategory": "no_match",
					"count": 9
				},
				{
					"nameOfCategory": "networking",
					"count": 9
				},
				{
					"nameOfCategory": "graphics",
					"count": 4
				},
				{
					"nameOfCategory": "sql",
					"count": 1
				}
			],
			"numberOfFiles": 34
		},
		{
			"category": "no_match",
			"dependency": [
				{
					"nameOfCategory": "io",
					"count": 20
				},
				{
					"nameOfCategory": "no_match",
					"count": 17
				},
				{
					"nameOfCategory": "networking",
					"count": 20
				},
				{
					"nameOfCategory": "graphics",
					"count": 15
				},
				{
					"nameOfCategory": "sql",
					"count": 10
				}
			],
			"numberOfFiles": 82
		},
		{
			"category": "networking",
			"dependency": [
				{
					"nameOfCategory": "io",
					"count": 25
				},
				{
					"nameOfCategory": "no_match",
					"count": 27
				},
				{
					"nameOfCategory": "networking",
					"count": 52
				},
				{
					"nameOfCategory": "graphics",
					"count": 23
				},
				{
					"nameOfCategory": "sql",
					"count": 10
				}
			],
			"numberOfFiles": 137
		},
		{
			"category": "graphics",
			"dependency": [
				{
					"nameOfCategory": "io",
					"count": 47
				},
				{
					"nameOfCategory": "no_match",
					"count": 17
				},
				{
					"nameOfCategory": "networking",
					"count": 43
				},
				{
					"nameOfCategory": "graphics",
					"count": 54
				},
				{
					"nameOfCategory": "sql",
					"count": 19
				}
			],
			"numberOfFiles": 180
		},
		{
			"category": "sql",
			"dependency": [
				{
					"nameOfCategory": "io",
					"count": 3
				},
				{
					"nameOfCategory": "no_match",
					"count": 3
				},
				{
					"nameOfCategory": "networking",
					"count": 8
				},
				{
					"nameOfCategory": "graphics",
					"count": 7
				},
				{
					"nameOfCategory": "sql",
					"count": 1
				}
			],
			"numberOfFiles": 22
		}
	],
	"levelTwo": [
		{
			"name": "io",
			"clusterNames": {
				"nameOfCluster": "",
				"listOfFiles": [
					{
						"name": "StatusListener",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.Level",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusData",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.status.StatusConsoleListener",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/status/StatusListener.java",
						"linesOfCode": 40,
						"category": "io",
						"fileSize": 1,
						"vulnerable": true
					},
					{
						"name": "MultiformatMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MapMessage",
								"category": "io"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/MultiformatMessage.java",
						"linesOfCode": 42,
						"category": "io",
						"fileSize": 1,
						"vulnerable": true
					},
					{
						"name": "MapMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.EnglishEnums",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.MultiformatMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.StringBuilders",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.Strings",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.MapMessage$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.MapMessage$MapFormat",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.StructuredDataMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.MapMessage$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.MapMessage$MapFormat",
								"category": "no_match"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/MapMessage.java",
						"linesOfCode": 332,
						"category": "io",
						"fileSize": 9,
						"vulnerable": true
					},
					{
						"name": "StatusConsoleListener",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.status.StatusListener",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.Level",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusData",
								"category": "no_match"
							}
						],
						"outputDeps": [],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/status/StatusConsoleListener.java",
						"linesOfCode": 113,
						"category": "io",
						"fileSize": 3,
						"vulnerable": true
					},
					{
						"name": "StringBuilders",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Chars",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.StringBuilderFormattable",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.BasicThreadInformation",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.MapMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ExtendedThreadInformation",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.ObjectMessage",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/StringBuilders.java",
						"linesOfCode": 94,
						"category": "io",
						"fileSize": 3,
						"vulnerable": true
					},
					{
						"name": "ThreadDumpMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$ThreadDumpMessageProxy",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$ExtendedThreadInfoFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$BasicThreadInfoFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.StringBuilderFormattable",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.Strings",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$ThreadInfoFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadInformation",
								"category": "sql"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$ExtendedThreadInfoFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$ThreadDumpMessageProxy",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$BasicThreadInfoFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$ThreadInfoFactory",
								"category": "no_match"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ThreadDumpMessage.java",
						"linesOfCode": 211,
						"category": "io",
						"fileSize": 6,
						"vulnerable": true
					},
					{
						"name": "SimpleLoggerContext",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.Level",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContext",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLogger",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContextFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/simple/SimpleLoggerContext.java",
						"linesOfCode": 138,
						"category": "io",
						"fileSize": 5,
						"vulnerable": true
					},
					{
						"name": "ExitMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.FlowMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.FlowMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory$SimpleExitMessage",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ExitMessage.java",
						"linesOfCode": 26,
						"category": "io",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "EntryMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.FlowMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.FlowMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory$SimpleExitMessage",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory$SimpleEntryMessage",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/EntryMessage.java",
						"linesOfCode": 26,
						"category": "io",
						"fileSize": 0,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "",
				"listOfFiles": [
					{
						"name": "LoggerRegistry$WeakMapFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$MapFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry",
								"category": "networking"
							}
						],
						"pathToFile": "LoggerRegistry$WeakMapFactory",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "LoaderUtil$1",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil$ThreadContextClassLoaderGetter",
								"category": "no_match"
							}
						],
						"pathToFile": "LoaderUtil$1",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "Unbox$WebSafeState",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Unbox",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.Unbox$1",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Unbox",
								"category": "graphics"
							}
						],
						"pathToFile": "Unbox$WebSafeState",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "LoaderUtil$UrlResource",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.ProviderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							}
						],
						"pathToFile": "LoaderUtil$UrlResource",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "LoaderUtil$ThreadContextClassLoaderGetter",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							}
						],
						"pathToFile": "LoaderUtil$ThreadContextClassLoaderGetter",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "MarkerManager$Log4jMarker",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.MarkerManager",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.PerformanceSensitive",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.Marker",
								"category": "sql"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.MarkerManager",
								"category": "graphics"
							}
						],
						"pathToFile": "MarkerManager$Log4jMarker",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "Unbox$State",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Unbox",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Unbox",
								"category": "graphics"
							}
						],
						"pathToFile": "Unbox$State",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "ThreadContext$EmptyThreadContextStack",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextStack",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$EmptyIterator",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$ContextStack",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$1",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							}
						],
						"pathToFile": "ThreadContext$EmptyThreadContextStack",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "SortedArrayStringMap$1",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.SortedArrayStringMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.TriConsumer",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.StringMap",
								"category": "sql"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.SortedArrayStringMap",
								"category": "graphics"
							}
						],
						"pathToFile": "SortedArrayStringMap$1",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "ThreadDumpMessage$ThreadInfoFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ThreadInformation",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$ExtendedThreadInfoFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$BasicThreadInfoFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage",
								"category": "io"
							}
						],
						"pathToFile": "ThreadDumpMessage$ThreadInfoFactory",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "LoggerRegistry$ConcurrentMapFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$MapFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry",
								"category": "networking"
							}
						],
						"pathToFile": "LoggerRegistry$ConcurrentMapFactory",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "ReflectionUtil$PrivateSecurityManager",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.ReflectionUtil",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.ReflectionUtil",
								"category": "networking"
							}
						],
						"pathToFile": "ReflectionUtil$PrivateSecurityManager",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "ThreadContext$EmptyIterator",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$1",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$EmptyThreadContextStack",
								"category": "no_match"
							}
						],
						"pathToFile": "ThreadContext$EmptyIterator",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "ParameterizedNoReferenceMessageFactory$StatusMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory",
								"category": "networking"
							}
						],
						"pathToFile": "ParameterizedNoReferenceMessageFactory$StatusMessage",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "CloseableThreadContext$Instance",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.CloseableThreadContext$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.CloseableThreadContext",
								"category": "sql"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.CloseableThreadContext",
								"category": "sql"
							}
						],
						"pathToFile": "CloseableThreadContext$Instance",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "StructuredDataMessage$Format",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.StructuredDataMessage",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.StructuredDataMessage",
								"category": "graphics"
							}
						],
						"pathToFile": "StructuredDataMessage$Format",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "ThreadDumpMessage$ThreadDumpMessageProxy",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage",
								"category": "io"
							}
						],
						"pathToFile": "ThreadDumpMessage$ThreadDumpMessageProxy",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "LoggerRegistry$MapFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$ConcurrentMapFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$WeakMapFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry",
								"category": "networking"
							}
						],
						"pathToFile": "LoggerRegistry$MapFactory",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "Unbox$1",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Unbox",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Unbox",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.Unbox$WebSafeState",
								"category": "no_match"
							}
						],
						"pathToFile": "Unbox$1",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "DefaultThreadContextMap$1",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextMap",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextMap",
								"category": "graphics"
							}
						],
						"pathToFile": "DefaultThreadContextMap$1",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "ExtendedThreadInformation$1",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ExtendedThreadInformation",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ExtendedThreadInformation",
								"category": "networking"
							}
						],
						"pathToFile": "ExtendedThreadInformation$1",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "DefaultFlowMessageFactory$SimpleExitMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory$AbstractFlowMessage",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.EntryMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ExitMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory",
								"category": "networking"
							}
						],
						"pathToFile": "DefaultFlowMessageFactory$SimpleExitMessage",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "MapMessage$MapFormat",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MapMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MapMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.MapMessage$1",
								"category": "no_match"
							}
						],
						"pathToFile": "MapMessage$MapFormat",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "GarbageFreeSortedArrayThreadContextMap$1",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.StringMap",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.ReadOnlyStringMap",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap",
								"category": "graphics"
							}
						],
						"pathToFile": "GarbageFreeSortedArrayThreadContextMap$1",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "CloseableThreadContext$1",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.CloseableThreadContext",
								"category": "sql"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.CloseableThreadContext",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.CloseableThreadContext$Instance",
								"category": "no_match"
							}
						],
						"pathToFile": "CloseableThreadContext$1",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "ThreadDumpMessage$BasicThreadInfoFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.BasicThreadInformation",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$ThreadInfoFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadInformation",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage",
								"category": "io"
							}
						],
						"pathToFile": "ThreadDumpMessage$BasicThreadInfoFactory",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "ThreadContext$1",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$EmptyIterator",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$EmptyThreadContextStack",
								"category": "no_match"
							}
						],
						"pathToFile": "ThreadContext$1",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "DefaultFlowMessageFactory$SimpleEntryMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory$AbstractFlowMessage",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.EntryMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory",
								"category": "networking"
							}
						],
						"pathToFile": "DefaultFlowMessageFactory$SimpleEntryMessage",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "StatusData",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Chars",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.Level",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.status.StatusListener",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusConsoleListener",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/status/StatusData.java",
						"linesOfCode": 145,
						"category": "no_match",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "MessageSupplier",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.LambdaUtil",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/MessageSupplier.java",
						"linesOfCode": 42,
						"category": "no_match",
						"fileSize": 1,
						"vulnerable": true
					},
					{
						"name": "CopyOnWriteSortedArrayThreadContextMap$1",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.StringMap",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.ReadOnlyStringMap",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap",
								"category": "graphics"
							}
						],
						"pathToFile": "CopyOnWriteSortedArrayThreadContextMap$1",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "ThreadDumpMessage$1",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$ExtendedThreadInfoFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$ThreadDumpMessageProxy",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$BasicThreadInfoFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage",
								"category": "io"
							}
						],
						"pathToFile": "ThreadDumpMessage$1",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "StatusLogger$BoundedQueue",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							}
						],
						"pathToFile": "StatusLogger$BoundedQueue",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "MapMessage$1",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MapMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.MapMessage$MapFormat",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MapMessage",
								"category": "io"
							}
						],
						"pathToFile": "MapMessage$1",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "ThreadDumpMessage$ExtendedThreadInfoFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ExtendedThreadInformation",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$ThreadInfoFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadInformation",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage",
								"category": "io"
							}
						],
						"pathToFile": "ThreadDumpMessage$ExtendedThreadInfoFactory",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					},
					{
						"name": "ThreadContext$ContextStack",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.MutableThreadContextStack",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextStack",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$EmptyThreadContextStack",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextStack",
								"category": "graphics"
							}
						],
						"pathToFile": "ThreadContext$ContextStack",
						"linesOfCode": 0,
						"category": "no_match",
						"fileSize": 0,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "",
				"listOfFiles": [
					{
						"name": "LocalizedMessageFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.AbstractMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.LocalizedMessage",
								"category": "graphics"
							}
						],
						"outputDeps": [],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/LocalizedMessageFactory.java",
						"linesOfCode": 82,
						"category": "networking",
						"fileSize": 2,
						"vulnerable": true
					},
					{
						"name": "Logger",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.MessageSupplier",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.Supplier",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.Level",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.Marker",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.message.EntryMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.MessageFormatMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.ProviderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.Unbox",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMapFactory",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.Activator",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.Provider",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.StringFormattedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.ReflectionUtil",
								"category": "networking"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/Logger.java",
						"linesOfCode": 4302,
						"category": "networking",
						"fileSize": 167,
						"vulnerable": true
					},
					{
						"name": "ProviderUtil",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil$UrlResource",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.Provider",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMapFactory",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.Activator",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/ProviderUtil.java",
						"linesOfCode": 148,
						"category": "networking",
						"fileSize": 5,
						"vulnerable": true
					},
					{
						"name": "FlowMessageFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.EntryMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ExitMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/FlowMessageFactory.java",
						"linesOfCode": 58,
						"category": "networking",
						"fileSize": 2,
						"vulnerable": true
					},
					{
						"name": "Provider",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContextFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.ProviderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMapFactory",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/Provider.java",
						"linesOfCode": 170,
						"category": "networking",
						"fileSize": 6,
						"vulnerable": true
					},
					{
						"name": "LoggerContext",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLogger",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContextFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.EventLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContextFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContext",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLoggerAdapter",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/LoggerContext.java",
						"linesOfCode": 72,
						"category": "networking",
						"fileSize": 2,
						"vulnerable": true
					},
					{
						"name": "Activator",
						"inputDeps": [
							{
								"name": "org.osgi.framework.wiring.BundleWiring",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.ProviderUtil",
								"category": "networking"
							},
							{
								"name": "org.osgi.framework.BundleActivator",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContextFactory",
								"category": "graphics"
							},
							{
								"name": "org.osgi.framework.BundleContext",
								"category": "no_match"
							},
							{
								"name": "org.osgi.framework.BundleEvent",
								"category": "no_match"
							},
							{
								"name": "org.osgi.framework.BundleListener",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.osgi.framework.AdminPermission",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.osgi.framework.wiring.BundleWire",
								"category": "no_match"
							},
							{
								"name": "org.osgi.framework.AdaptPermission",
								"category": "no_match"
							},
							{
								"name": "org.osgi.framework.Bundle",
								"category": "no_match"
							},
							{
								"name": "org.osgi.framework.SynchronousBundleListener",
								"category": "no_match"
							}
						],
						"outputDeps": [],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/Activator.java",
						"linesOfCode": 124,
						"category": "networking",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "ExtendedThreadInformation",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ExtendedThreadInformation$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.StringBuilders",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadInformation",
								"category": "sql"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$ExtendedThreadInfoFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ExtendedThreadInformation$1",
								"category": "no_match"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ExtendedThreadInformation.java",
						"linesOfCode": 166,
						"category": "networking",
						"fileSize": 6,
						"vulnerable": true
					},
					{
						"name": "MessageFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.LoggerContextKey",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContext",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContext",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.MessageFactory2Adapter",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLoggerWrapper",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.MessageFactory2",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.LambdaUtil",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/MessageFactory.java",
						"linesOfCode": 57,
						"category": "networking",
						"fileSize": 1,
						"vulnerable": true
					},
					{
						"name": "MessageFactory2",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.AbstractMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ReusableMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.MessageFactory2Adapter",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/MessageFactory2.java",
						"linesOfCode": 181,
						"category": "networking",
						"fileSize": 6,
						"vulnerable": true
					},
					{
						"name": "SimpleLoggerContextFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.LoggerContextFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContext",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContext",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/simple/SimpleLoggerContextFactory.java",
						"linesOfCode": 47,
						"category": "networking",
						"fileSize": 1,
						"vulnerable": true
					},
					{
						"name": "LoggerRegistry",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$ConcurrentMapFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$MapFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$WeakMapFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.PerformanceSensitive",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$ConcurrentMapFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContext",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$MapFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$WeakMapFactory",
								"category": "no_match"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/LoggerRegistry.java",
						"linesOfCode": 182,
						"category": "networking",
						"fileSize": 6,
						"vulnerable": true
					},
					{
						"name": "EventLogger",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.MarkerManager",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.StructuredDataMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.Level",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.Marker",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContext",
								"category": "networking"
							}
						],
						"outputDeps": [],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/EventLogger.java",
						"linesOfCode": 58,
						"category": "networking",
						"fileSize": 1,
						"vulnerable": true
					},
					{
						"name": "DefaultFlowMessageFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.SimpleMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.FlowMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory$AbstractFlowMessage",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory$SimpleExitMessage",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.ReusableMessage",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory$SimpleEntryMessage",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.EntryMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ExitMessage",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory$AbstractFlowMessage",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory$SimpleExitMessage",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory$SimpleEntryMessage",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/DefaultFlowMessageFactory.java",
						"linesOfCode": 214,
						"category": "networking",
						"fileSize": 6,
						"vulnerable": true
					},
					{
						"name": "ExtendedLoggerWrapper",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.Level",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.Marker",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"outputDeps": [],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/ExtendedLoggerWrapper.java",
						"linesOfCode": 219,
						"category": "networking",
						"fileSize": 8,
						"vulnerable": true
					},
					{
						"name": "Constants",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Unbox",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMapFactory",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/Constants.java",
						"linesOfCode": 62,
						"category": "networking",
						"fileSize": 2,
						"vulnerable": true
					},
					{
						"name": "LoggerContextKey",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"outputDeps": [],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/LoggerContextKey.java",
						"linesOfCode": 47,
						"category": "networking",
						"fileSize": 1,
						"vulnerable": true
					},
					{
						"name": "LoaderUtil",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil$UrlResource",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil$ThreadContextClassLoaderGetter",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.LowLevelLogUtil",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Constants",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.ProviderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil$UrlResource",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil$ThreadContextClassLoaderGetter",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLoggerAdapter",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.ReflectionUtil",
								"category": "networking"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/LoaderUtil.java",
						"linesOfCode": 319,
						"category": "networking",
						"fileSize": 12,
						"vulnerable": true
					},
					{
						"name": "ParameterizedNoReferenceMessageFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.AbstractMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.SimpleMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory$StatusMessage",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory$StatusMessage",
								"category": "no_match"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ParameterizedNoReferenceMessageFactory.java",
						"linesOfCode": 107,
						"category": "networking",
						"fileSize": 3,
						"vulnerable": true
					},
					{
						"name": "PropertiesUtil",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.LowLevelLogUtil",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.Constants",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.ProviderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.Unbox",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContext",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMapFactory",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.Strings",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/PropertiesUtil.java",
						"linesOfCode": 287,
						"category": "networking",
						"fileSize": 10,
						"vulnerable": true
					},
					{
						"name": "ReflectionUtil",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.ReflectionUtil$PrivateSecurityManager",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.Strings",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.PerformanceSensitive",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.ReflectionUtil$PrivateSecurityManager",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/ReflectionUtil.java",
						"linesOfCode": 344,
						"category": "networking",
						"fileSize": 14,
						"vulnerable": true
					},
					{
						"name": "ReadOnlyStringMap",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.BiConsumer",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.TriConsumer",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.SortedArrayStringMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.StringMap",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/ReadOnlyStringMap.java",
						"linesOfCode": 106,
						"category": "networking",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "StatusLogger",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.status.StatusListener",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger$BoundedQueue",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.Strings",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.Level",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusData",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.Marker",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLogger",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.MessageFormatMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger$BoundedQueue",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.ProviderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.Unbox",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.Provider",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.StringFormattedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.ReflectionUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.LocalizedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMapFactory",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.Activator",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/status/StatusLogger.java",
						"linesOfCode": 398,
						"category": "networking",
						"fileSize": 13,
						"vulnerable": true
					},
					{
						"name": "ExtendedLogger",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.MessageSupplier",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.Supplier",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.Level",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.Marker",
								"category": "sql"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLoggerWrapper",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$ConcurrentMapFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.EventLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContext",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$MapFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry$WeakMapFactory",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContext",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/ExtendedLogger.java",
						"linesOfCode": 552,
						"category": "networking",
						"fileSize": 22,
						"vulnerable": true
					},
					{
						"name": "LogManager",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.ProviderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContextFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.Provider",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContext",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.Terminable",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.ReflectionUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContextFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.Strings",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.StringFormatterMessageFactory",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.EventLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMapFactory",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLoggerAdapter",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/LogManager.java",
						"linesOfCode": 654,
						"category": "networking",
						"fileSize": 30,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "",
				"listOfFiles": [
					{
						"name": "ReusableObjectMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.StringBuilderFormattable",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ObjectMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ReusableMessage",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.PerformanceSensitive",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ReusableMessageFactory",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ReusableObjectMessage.java",
						"linesOfCode": 142,
						"category": "graphics",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "ReusableMessageFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ReusableObjectMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ReusableParameterizedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ReusableSimpleMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.PerformanceSensitive",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.MessageFactory2",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ReusableMessageFactory.java",
						"linesOfCode": 200,
						"category": "graphics",
						"fileSize": 7,
						"vulnerable": true
					},
					{
						"name": "MessageFormatMessageFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.AbstractMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.MessageFormatMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							}
						],
						"outputDeps": [],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/MessageFormatMessageFactory.java",
						"linesOfCode": 134,
						"category": "graphics",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "Strings",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Chars",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MapMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.StructuredDataId",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.Level",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextStack",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLogger",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.ReflectionUtil",
								"category": "networking"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/Strings.java",
						"linesOfCode": 239,
						"category": "graphics",
						"fileSize": 7,
						"vulnerable": true
					},
					{
						"name": "StringFormatterMessageFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.AbstractMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.StringFormattedMessage",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/StringFormatterMessageFactory.java",
						"linesOfCode": 148,
						"category": "graphics",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "AbstractLoggerAdapter",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerAdapter",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContext",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							}
						],
						"outputDeps": [],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/AbstractLoggerAdapter.java",
						"linesOfCode": 110,
						"category": "graphics",
						"fileSize": 3,
						"vulnerable": true
					},
					{
						"name": "MutableThreadContextStack",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextStack",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$ContextStack",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextStack",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/MutableThreadContextStack.java",
						"linesOfCode": 249,
						"category": "graphics",
						"fileSize": 5,
						"vulnerable": true
					},
					{
						"name": "DefaultThreadContextStack",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.MutableThreadContextStack",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextStack",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.Strings",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$ContextStack",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/DefaultThreadContextStack.java",
						"linesOfCode": 307,
						"category": "graphics",
						"fileSize": 9,
						"vulnerable": true
					},
					{
						"name": "LocalizedMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.LoggerNameAwareMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.FormattedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.LocalizedMessageFactory",
								"category": "networking"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/LocalizedMessage.java",
						"linesOfCode": 290,
						"category": "graphics",
						"fileSize": 10,
						"vulnerable": true
					},
					{
						"name": "DefaultThreadContextMap",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.BiConsumer",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.TriConsumer",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.ReadOnlyStringMap",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextMap$1",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMapFactory",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextMap$1",
								"category": "no_match"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/DefaultThreadContextMap.java",
						"linesOfCode": 225,
						"category": "graphics",
						"fileSize": 7,
						"vulnerable": true
					},
					{
						"name": "SimpleLogger",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContext",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.Level",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.Strings",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.Marker",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContext",
								"category": "io"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/simple/SimpleLogger.java",
						"linesOfCode": 256,
						"category": "graphics",
						"fileSize": 9,
						"vulnerable": true
					},
					{
						"name": "FormattedMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MessageFormatMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.StringFormattedMessage",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.FormattedMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.LocalizedMessage",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/FormattedMessage.java",
						"linesOfCode": 263,
						"category": "graphics",
						"fileSize": 8,
						"vulnerable": true
					},
					{
						"name": "CopyOnWriteSortedArrayThreadContextMap",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMap2",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.SortedArrayStringMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWrite",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.StringMap",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.ReadOnlyStringMap",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMapFactory",
								"category": "sql"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/CopyOnWriteSortedArrayThreadContextMap.java",
						"linesOfCode": 224,
						"category": "graphics",
						"fileSize": 7,
						"vulnerable": true
					},
					{
						"name": "StructuredDataMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.EnglishEnums",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.MapMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.StructuredDataId",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.StructuredDataMessage$Format",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.EventLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.StructuredDataMessage$Format",
								"category": "no_match"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/StructuredDataMessage.java",
						"linesOfCode": 391,
						"category": "graphics",
						"fileSize": 11,
						"vulnerable": true
					},
					{
						"name": "AbstractMessageFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.SimpleMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ObjectMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.MessageFactory2",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.FormattedMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.MessageFormatMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.LocalizedMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.SimpleMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.StringFormatterMessageFactory",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/AbstractMessageFactory.java",
						"linesOfCode": 146,
						"category": "graphics",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "ObjectArrayMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							}
						],
						"outputDeps": [],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ObjectArrayMessage.java",
						"linesOfCode": 134,
						"category": "graphics",
						"fileSize": 3,
						"vulnerable": true
					},
					{
						"name": "ParameterizedMessageFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.AbstractMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedMessage",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ParameterizedMessageFactory.java",
						"linesOfCode": 149,
						"category": "graphics",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "SimpleMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.StringBuilderFormattable",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.AbstractMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.ReusableSimpleMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.SimpleMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.MessageFactory2Adapter",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/SimpleMessage.java",
						"linesOfCode": 155,
						"category": "graphics",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "Unbox",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Constants",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.Unbox$WebSafeState",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.Unbox$State",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.Unbox$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.PerformanceSensitive",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Unbox$WebSafeState",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.Unbox$State",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.Unbox$1",
								"category": "no_match"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/Unbox.java",
						"linesOfCode": 273,
						"category": "graphics",
						"fileSize": 10,
						"vulnerable": true
					},
					{
						"name": "LambdaUtil",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.MessageSupplier",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.Supplier",
								"category": "sql"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/LambdaUtil.java",
						"linesOfCode": 94,
						"category": "graphics",
						"fileSize": 3,
						"vulnerable": true
					},
					{
						"name": "ThreadContext",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMap2",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$EmptyIterator",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextStack",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$EmptyThreadContextStack",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextStack",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMapFactory",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.NoOpThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$ContextStack",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$1",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.MutableThreadContextStack",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextStack",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$EmptyIterator",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.CloseableThreadContext$Instance",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$ContextStack",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$EmptyThreadContextStack",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextStack",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/ThreadContext.java",
						"linesOfCode": 576,
						"category": "graphics",
						"fileSize": 17,
						"vulnerable": true
					},
					{
						"name": "BasicThreadInformation",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Chars",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.StringBuilders",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ThreadInformation",
								"category": "sql"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ThreadDumpMessage$BasicThreadInfoFactory",
								"category": "no_match"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/BasicThreadInformation.java",
						"linesOfCode": 110,
						"category": "graphics",
						"fileSize": 3,
						"vulnerable": true
					},
					{
						"name": "MessageFactory2Adapter",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.SimpleMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.MessageFactory2",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/MessageFactory2Adapter.java",
						"linesOfCode": 118,
						"category": "graphics",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "MarkerManager",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.Marker",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.MarkerManager$Log4jMarker",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.EventLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.MarkerManager$Log4jMarker",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/MarkerManager.java",
						"linesOfCode": 402,
						"category": "graphics",
						"fileSize": 14,
						"vulnerable": true
					},
					{
						"name": "ReusableParameterizedMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterFormatter",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ReusableMessage",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.PerformanceSensitive",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedMessage",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ReusableMessageFactory",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ReusableParameterizedMessage.java",
						"linesOfCode": 330,
						"category": "graphics",
						"fileSize": 11,
						"vulnerable": true
					},
					{
						"name": "ReusableSimpleMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.SimpleMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ReusableMessage",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.PerformanceSensitive",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ReusableMessageFactory",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ReusableSimpleMessage.java",
						"linesOfCode": 105,
						"category": "graphics",
						"fileSize": 2,
						"vulnerable": true
					},
					{
						"name": "ObjectMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.StringBuilderFormattable",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.StringBuilders",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.AbstractMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ReusableObjectMessage",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ObjectMessage.java",
						"linesOfCode": 145,
						"category": "graphics",
						"fileSize": 3,
						"vulnerable": true
					},
					{
						"name": "SimpleMessageFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.AbstractMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.SimpleMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							}
						],
						"outputDeps": [],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/SimpleMessageFactory.java",
						"linesOfCode": 147,
						"category": "graphics",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "ParameterizedMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterFormatter",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.StringBuilderFormattable",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.FormattedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ReusableParameterizedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ParameterizedMessage.java",
						"linesOfCode": 331,
						"category": "graphics",
						"fileSize": 12,
						"vulnerable": true
					},
					{
						"name": "FormattedMessageFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.FormattedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.AbstractMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							}
						],
						"outputDeps": [],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/FormattedMessageFactory.java",
						"linesOfCode": 136,
						"category": "graphics",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "NoOpThreadContextMap",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMap",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/NoOpThreadContextMap.java",
						"linesOfCode": 65,
						"category": "graphics",
						"fileSize": 1,
						"vulnerable": true
					},
					{
						"name": "AbstractLogger",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Constants",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.SimpleMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.MessageSupplier",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.message.FlowMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.ReusableMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.Level",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.LoaderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.ExitMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.LambdaUtil",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.Marker",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.message.MessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.DefaultFlowMessageFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.MessageFactory2Adapter",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.EntryMessage",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.message.StringFormattedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.MarkerManager",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.Supplier",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.Strings",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.MessageFactory2",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.ExtendedLoggerWrapper",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContextKey",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContext",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerRegistry",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.simple.SimpleLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/AbstractLogger.java",
						"linesOfCode": 2703,
						"category": "graphics",
						"fileSize": 102,
						"vulnerable": true
					},
					{
						"name": "SortedArrayStringMap",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.BiConsumer",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.SortedArrayStringMap$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.TriConsumer",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.util.StringMap",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.ReadOnlyStringMap",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.util.SortedArrayStringMap$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/SortedArrayStringMap.java",
						"linesOfCode": 528,
						"category": "graphics",
						"fileSize": 16,
						"vulnerable": true
					},
					{
						"name": "ParameterFormatter",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.StringBuilderFormattable",
								"category": "io"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.ReusableParameterizedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.ParameterizedMessage",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/ParameterFormatter.java",
						"linesOfCode": 661,
						"category": "graphics",
						"fileSize": 26,
						"vulnerable": true
					},
					{
						"name": "StructuredDataId",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Strings",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.StructuredDataMessage",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/StructuredDataId.java",
						"linesOfCode": 199,
						"category": "graphics",
						"fileSize": 6,
						"vulnerable": true
					},
					{
						"name": "LoggerContextFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.LoggerContext",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.simple.SimpleLoggerContextFactory",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMapFactory",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.Activator",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.Provider",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/LoggerContextFactory.java",
						"linesOfCode": 59,
						"category": "graphics",
						"fileSize": 2,
						"vulnerable": true
					},
					{
						"name": "GarbageFreeSortedArrayThreadContextMap",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMap2",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.SortedArrayStringMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.StringMap",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.util.ReadOnlyStringMap",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMapFactory",
								"category": "sql"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/GarbageFreeSortedArrayThreadContextMap.java",
						"linesOfCode": 225,
						"category": "graphics",
						"fileSize": 7,
						"vulnerable": true
					},
					{
						"name": "StringFormattedMessage",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.message.FormattedMessage",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.message.StringFormatterMessageFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.AbstractLogger",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/message/StringFormattedMessage.java",
						"linesOfCode": 190,
						"category": "graphics",
						"fileSize": 5,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "sql",
			"clusterNames": {
				"nameOfCluster": "",
				"listOfFiles": [
					{
						"name": "StringMap",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.ReadOnlyStringMap",
								"category": "networking"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMap2",
								"category": "sql"
							},
							{
								"name": "org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.util.SortedArrayStringMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.SortedArrayStringMap$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/util/StringMap.java",
						"linesOfCode": 98,
						"category": "sql",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "ThreadContextStack",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$ContextStack",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.MutableThreadContextStack",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.ThreadContext$EmptyThreadContextStack",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextStack",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/ThreadContextStack.java",
						"linesOfCode": 26,
						"category": "sql",
						"fileSize": 1,
						"vulnerable": true
					},
					{
						"name": "ThreadContextMap2",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.util.StringMap",
								"category": "sql"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/ThreadContextMap2.java",
						"linesOfCode": 51,
						"category": "sql",
						"fileSize": 1,
						"vulnerable": true
					},
					{
						"name": "ThreadContextMapFactory",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.util.Constants",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.Logger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.ProviderUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.ThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.DefaultThreadContextMap",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.status.StatusLogger",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.LoggerContextFactory",
								"category": "graphics"
							},
							{
								"name": "org.apache.logging.log4j.spi.Provider",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.util.PropertiesUtil",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.LogManager",
								"category": "networking"
							},
							{
								"name": "org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap",
								"category": "graphics"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.ThreadContext",
								"category": "graphics"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/spi/ThreadContextMapFactory.java",
						"linesOfCode": 91,
						"category": "sql",
						"fileSize": 4,
						"vulnerable": true
					},
					{
						"name": "CloseableThreadContext",
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.CloseableThreadContext$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.CloseableThreadContext$Instance",
								"category": "no_match"
							}
						],
						"outputDeps": [
							{
								"name": "org.apache.logging.log4j.CloseableThreadContext$1",
								"category": "no_match"
							},
							{
								"name": "org.apache.logging.log4j.CloseableThreadContext$Instance",
								"category": "no_match"
							}
						],
						"pathToFile": "/Users/mukesh/Desktop/apache-log4j-2.7-src/log4j-api/src/main/java/org/apache/logging/log4j/CloseableThreadContext.java",
						"linesOfCode": 166,
						"category": "sql",
						"fileSize": 6,
						"vulnerable": true
					}
				]
			}
		}
	],
	"cloudInfo": {
		"MessageSupplier": "no_match",
		"StringMap": "sql",
		"LoggerRegistry": "networking",
		"DefaultFlowMessageFactory": "networking",
		"PropertiesUtil": "networking",
		"Logger": "networking",
		"StatusData": "no_match",
		"ThreadContext$ContextStack": "no_match",
		"LoaderUtil": "networking",
		"MessageFactory2": "networking",
		"AbstractLogger": "graphics",
		"ThreadContext$1": "no_match",
		"StatusLogger": "networking",
		"ProviderUtil": "networking",
		"MessageFactory": "networking",
		"SimpleMessage": "graphics",
		"ExitMessage": "io",
		"ThreadContext": "graphics",
		"LoggerContextFactory": "graphics",
		"LoggerContext": "networking",
		"EntryMessage": "io",
		"Strings": "graphics",
		"ThreadContextStack": "sql",
		"ThreadDumpMessage": "io",
		"ExtendedLogger": "networking",
		"ReadOnlyStringMap": "networking",
		"ThreadDumpMessage$1": "no_match",
		"ParameterizedMessage": "graphics",
		"AbstractMessageFactory": "graphics"
	}
}