
    const schema = {
  "asyncapi": "2.0.0",
  "info": {
    "title": "Messaging WebSocket API",
    "version": "1.0.0",
    "description": "WebSocket API for real-time chat features, including sending, editing, pinning, unpinning, and deleting messages."
  },
  "servers": {
    "chat-server": {
      "url": "http://localhost:5000",
      "protocol": "ws"
    }
  },
  "channels": {
    "message": {
      "description": "Channel for messaging.",
      "subscribe": {
        "summary": "Send chat messages",
        "operationId": "sendMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "chatId": {
                "type": "integer",
                "description": "Identifier of the chat room",
                "x-parser-schema-id": "<anonymous-schema-33>"
              },
              "key": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-34>"
              },
              "content": {
                "type": "string",
                "description": "The content of the message",
                "x-parser-schema-id": "<anonymous-schema-35>"
              },
              "forwarded": {
                "type": "boolean",
                "nullable": true,
                "description": "Indicates if the message is forwarded",
                "x-parser-schema-id": "<anonymous-schema-36>"
              },
              "selfDestruct": {
                "type": "boolean",
                "nullable": true,
                "description": "Indicates if the message is set to self-destruct",
                "x-parser-schema-id": "<anonymous-schema-37>"
              },
              "expiresAfter": {
                "type": "integer",
                "nullable": true,
                "description": "Time in seconds until the message expires",
                "x-parser-schema-id": "<anonymous-schema-38>"
              },
              "type": {
                "type": "string",
                "description": "Type of the message (e.g., text, image)",
                "x-parser-schema-id": "<anonymous-schema-39>"
              },
              "sentAt": {
                "type": "string",
                "format": "date-time",
                "description": "Timestamp(UTC format) when the message was sent",
                "x-parser-schema-id": "<anonymous-schema-40>"
              },
              "media": {
                "type": "string",
                "description": "blobName",
                "nullable": true,
                "x-parser-schema-id": "<anonymous-schema-41>"
              },
              "extension": {
                "type": "string",
                "description": "blobName",
                "nullable": true,
                "x-parser-schema-id": "<anonymous-schema-42>"
              },
              "parentMessageId": {
                "type": "integer",
                "nullable": true,
                "x-parser-schema-id": "<anonymous-schema-43>"
              },
              "forwardedFromUserId": {
                "type": "integer",
                "nullable": true,
                "x-parser-schema-id": "<anonymous-schema-44>"
              },
              "mentions": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-46>"
                },
                "x-parser-schema-id": "<anonymous-schema-45>"
              },
              "isSecret": {
                "type": "boolean",
                "description": "Is message in secret chat",
                "x-parser-schema-id": "<anonymous-schema-47>"
              },
              "isAnnouncement": {
                "type": "boolean",
                "description": "Is message an announcement",
                "x-parser-schema-id": "<anonymous-schema-48>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-32>"
          },
          "x-parser-message-name": "<anonymous-message-2>"
        }
      },
      "publish": {
        "summary": "Receive chat messages",
        "operationId": "receiveMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "description": "Unique identifier for the message",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "chatId": {
                "type": "integer",
                "description": "Identifier of the chat room",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "sender": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "userName": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "profilePic": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "content": {
                "type": "string",
                "description": "The content of the message",
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "read": {
                "type": "boolean",
                "description": "Indicates if the message has been read",
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "delivered": {
                "type": "boolean",
                "description": "Indicates if the message has been delivered",
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "forwarded": {
                "type": "boolean",
                "description": "Indicates if the message has been forwarded",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "pinned": {
                "type": "boolean",
                "description": "Indicates if the message has been pinned",
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "edited": {
                "type": "boolean",
                "description": "Indicates if the message has been edited",
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "selfDestruct": {
                "type": "boolean",
                "description": "Indicates if the message is set to self-destruct",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "expiresAfter": {
                "type": "integer",
                "nullable": true,
                "description": "Time in seconds until the message expires",
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "type": {
                "type": "string",
                "description": "Type of the message (e.g., text, image)",
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "time": {
                "type": "string",
                "format": "date-time",
                "description": "Timestamp(UTC format) when the message was sent",
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "mentions": {
                "type": "array",
                "items": {
                  "userId": {
                    "type": "integer"
                  },
                  "x-parser-schema-id": "<anonymous-schema-19>"
                },
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "media": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "key": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-21>"
              },
              "parentMessage": {
                "type": "object",
                "nullable": true,
                "description": "Parent message data if this message is a reply",
                "properties": {
                  "id": {
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-23>"
                  },
                  "content": {
                    "type": "string",
                    "description": "The content of the parent message",
                    "x-parser-schema-id": "<anonymous-schema-24>"
                  },
                  "senderName": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-25>"
                  },
                  "senderId": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-26>"
                  },
                  "senderProfilePic": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-27>"
                  },
                  "media": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-28>"
                  },
                  "type": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-29>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              "isAnnouncement": {
                "type": "boolean",
                "description": "Is message an announcement",
                "x-parser-schema-id": "<anonymous-schema-30>"
              },
              "isSecret": {
                "type": "boolean",
                "description": "Is message in secret chat",
                "x-parser-schema-id": "<anonymous-schema-31>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-message-name": "<anonymous-message-1>"
        }
      }
    },
    "editMessage": {
      "description": "Channel for editing messages.",
      "subscribe": {
        "summary": "Send an edited message",
        "operationId": "sendEditedMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-54>"
              },
              "chatId": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-55>"
              },
              "content": {
                "type": "string",
                "description": "new content of the message",
                "x-parser-schema-id": "<anonymous-schema-56>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-53>"
          },
          "x-parser-message-name": "<anonymous-message-4>"
        }
      },
      "publish": {
        "summary": "Receive edited chat messages",
        "operationId": "receiveEditedMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-50>"
              },
              "chatId": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-51>"
              },
              "content": {
                "type": "string",
                "description": "new content of the message",
                "x-parser-schema-id": "<anonymous-schema-52>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-49>"
          },
          "x-parser-message-name": "<anonymous-message-3>"
        }
      }
    },
    "pinMessage": {
      "description": "Channel for editing messages.",
      "subscribe": {
        "summary": "Send a pinned message",
        "operationId": "sendPinnedMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-61>"
              },
              "chatId": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-62>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-60>"
          },
          "x-parser-message-name": "<anonymous-message-6>"
        }
      },
      "publish": {
        "summary": "Receive pinned chat messages",
        "operationId": "receivePinnedMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-58>"
              },
              "chatId": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-59>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-57>"
          },
          "x-parser-message-name": "<anonymous-message-5>"
        }
      }
    },
    "unpinMessage": {
      "description": "Channel for unpinning messages.",
      "subscribe": {
        "summary": "Send unpinned message",
        "operationId": "sendUnPinnedMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-67>"
              },
              "chatId": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-68>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-66>"
          },
          "x-parser-message-name": "<anonymous-message-8>"
        }
      },
      "publish": {
        "summary": "Receive unpinned messages",
        "operationId": "receiveUnPinnedMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "messageId": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-64>"
              },
              "chatId": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-65>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-63>"
          },
          "x-parser-message-name": "<anonymous-message-7>"
        }
      }
    },
    "deleteMessage": {
      "description": "Channel for delete messages.",
      "subscribe": {
        "summary": "delete messages",
        "operationId": "deletedMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "messages": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "description": "Identifier of the message",
                  "x-parser-schema-id": "<anonymous-schema-75>"
                },
                "x-parser-schema-id": "<anonymous-schema-74>"
              },
              "chatId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-76>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-73>"
          },
          "x-parser-message-name": "<anonymous-message-10>"
        }
      },
      "publish": {
        "summary": "Receive deleted messages",
        "operationId": "receiveDeletedMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "messages": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "description": "Identifier of the message",
                  "x-parser-schema-id": "<anonymous-schema-71>"
                },
                "x-parser-schema-id": "<anonymous-schema-70>"
              },
              "chatId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-72>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-69>"
          },
          "x-parser-message-name": "<anonymous-message-9>"
        }
      }
    },
    "expireMessage": {
      "description": "Channel for expiring messages.",
      "publish": {
        "operationId": "receiveExpiredMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-78>"
              },
              "chatId": {
                "type": "integer",
                "description": "Identifier of the chat",
                "x-parser-schema-id": "<anonymous-schema-79>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-77>"
          },
          "x-parser-message-name": "<anonymous-message-11>"
        }
      }
    },
    "readMessage": {
      "description": "Channel for read messages.",
      "subscribe": {
        "operationId": "readMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "messages": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "description": "Identifier of the message",
                  "x-parser-schema-id": "<anonymous-schema-86>"
                },
                "x-parser-schema-id": "<anonymous-schema-85>"
              },
              "chatId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-87>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-84>"
          },
          "x-parser-message-name": "<anonymous-message-13>"
        }
      },
      "publish": {
        "operationId": "getReadMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "messageIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "description": "Identifier of the message",
                  "x-parser-schema-id": "<anonymous-schema-82>"
                },
                "x-parser-schema-id": "<anonymous-schema-81>"
              },
              "chatId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-83>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-80>"
          },
          "x-parser-message-name": "<anonymous-message-12>"
        }
      }
    },
    "readAllMessages": {
      "description": "Channel for read messages.",
      "subscribe": {
        "operationId": "readAllMessages",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "chatId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-89>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-88>"
          },
          "x-parser-message-name": "<anonymous-message-14>"
        }
      }
    },
    "deliverMessage": {
      "description": "Channel for delivered messages.",
      "subscribe": {
        "operationId": "deliverMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "messageId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-95>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-94>"
          },
          "x-parser-message-name": "<anonymous-message-16>"
        }
      },
      "publish": {
        "operationId": "getDeliveredMessage",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "messageIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "description": "Identifier of the message",
                  "x-parser-schema-id": "<anonymous-schema-92>"
                },
                "x-parser-schema-id": "<anonymous-schema-91>"
              },
              "chatId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-93>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-90>"
          },
          "x-parser-message-name": "<anonymous-message-15>"
        }
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  