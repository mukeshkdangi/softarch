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
				"nameOfCluster": "StatusListener",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "io",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "io",
			"clusterNames": {
				"nameOfCluster": "MultiformatMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "io",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "io",
			"clusterNames": {
				"nameOfCluster": "MapMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "io",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "io",
			"clusterNames": {
				"nameOfCluster": "StatusConsoleListener",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "io",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "io",
			"clusterNames": {
				"nameOfCluster": "StringBuilders",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "io",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "io",
			"clusterNames": {
				"nameOfCluster": "ThreadDumpMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "io",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "io",
			"clusterNames": {
				"nameOfCluster": "SimpleLoggerContext",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "io",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "io",
			"clusterNames": {
				"nameOfCluster": "ExitMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "io",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "io",
			"clusterNames": {
				"nameOfCluster": "EntryMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "io",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "LoggerRegistry$WeakMapFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "LoaderUtil$1",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "Unbox$WebSafeState",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "LoaderUtil$UrlResource",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "LoaderUtil$ThreadContextClassLoaderGetter",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "MarkerManager$Log4jMarker",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "Unbox$State",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "ThreadContext$EmptyThreadContextStack",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "SortedArrayStringMap$1",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "ThreadDumpMessage$ThreadInfoFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "LoggerRegistry$ConcurrentMapFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "ReflectionUtil$PrivateSecurityManager",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "ThreadContext$EmptyIterator",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "ParameterizedNoReferenceMessageFactory$StatusMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "CloseableThreadContext$Instance",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "StructuredDataMessage$Format",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "ThreadDumpMessage$ThreadDumpMessageProxy",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "LoggerRegistry$MapFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "Unbox$1",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "DefaultThreadContextMap$1",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "ExtendedThreadInformation$1",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "DefaultFlowMessageFactory$SimpleExitMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "MapMessage$MapFormat",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "GarbageFreeSortedArrayThreadContextMap$1",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "CloseableThreadContext$1",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "ThreadDumpMessage$BasicThreadInfoFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "ThreadContext$1",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "DefaultFlowMessageFactory$SimpleEntryMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "StatusData",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "MessageSupplier",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "CopyOnWriteSortedArrayThreadContextMap$1",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "ThreadDumpMessage$1",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "StatusLogger$BoundedQueue",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "MapMessage$1",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "ThreadDumpMessage$ExtendedThreadInfoFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "no_match",
			"clusterNames": {
				"nameOfCluster": "ThreadContext$ContextStack",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "no_match",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "LocalizedMessageFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "Logger",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "ProviderUtil",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "FlowMessageFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "Provider",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "LoggerContext",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "Activator",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "ExtendedThreadInformation",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "MessageFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "MessageFactory2",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "SimpleLoggerContextFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "LoggerRegistry",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "EventLogger",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "DefaultFlowMessageFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "ExtendedLoggerWrapper",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "Constants",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "LoggerContextKey",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "LoaderUtil",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "ParameterizedNoReferenceMessageFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "PropertiesUtil",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "ReflectionUtil",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "ReadOnlyStringMap",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "StatusLogger",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "ExtendedLogger",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "networking",
			"clusterNames": {
				"nameOfCluster": "LogManager",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "networking",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "ReusableObjectMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "ReusableMessageFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "MessageFormatMessageFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "Strings",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "StringFormatterMessageFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "AbstractLoggerAdapter",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "MutableThreadContextStack",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "DefaultThreadContextStack",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "LocalizedMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "DefaultThreadContextMap",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "SimpleLogger",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "FormattedMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "CopyOnWriteSortedArrayThreadContextMap",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "StructuredDataMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "AbstractMessageFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "ObjectArrayMessage",
				"listOfFiles": [
					{
						"inputDeps": [
							{
								"name": "org.apache.logging.log4j.message.Message",
								"category": "io"
							}
						],
						"outputDeps": [],
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "ParameterizedMessageFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "SimpleMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "Unbox",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "LambdaUtil",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "ThreadContext",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "BasicThreadInformation",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "MessageFactory2Adapter",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "MarkerManager",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "ReusableParameterizedMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "ReusableSimpleMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "ObjectMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "SimpleMessageFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "ParameterizedMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "FormattedMessageFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "NoOpThreadContextMap",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "AbstractLogger",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "SortedArrayStringMap",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "ParameterFormatter",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "StructuredDataId",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "LoggerContextFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "GarbageFreeSortedArrayThreadContextMap",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "graphics",
			"clusterNames": {
				"nameOfCluster": "StringFormattedMessage",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "graphics",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "sql",
			"clusterNames": {
				"nameOfCluster": "StringMap",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "sql",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "sql",
			"clusterNames": {
				"nameOfCluster": "ThreadContextStack",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "sql",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "sql",
			"clusterNames": {
				"nameOfCluster": "ThreadContextMap2",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "sql",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "sql",
			"clusterNames": {
				"nameOfCluster": "ThreadContextMapFactory",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "sql",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		},
		{
			"name": "sql",
			"clusterNames": {
				"nameOfCluster": "CloseableThreadContext",
				"listOfFiles": [
					{
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
						"pathToFile": "file_path",
						"linesOfCode": 100,
						"category": "sql",
						"fileSize": 100,
						"vulnerable": true
					}
				]
			}
		}
	]
}