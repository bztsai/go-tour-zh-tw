/* Copyright 2012 The Go Authors.   All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
'use strict';

angular.module('tour.values', []).

// List of modules with description and lessons in it.
value('TableOfContents', [{
    'id': 'mechanics',
    'title': '如何使用本指南',
    'description': '<p>歡迎來到<a href="http://golang.org/">Go程式語言</a>指南。本指南涵蓋Go語言的主要功能。</p>',
    'lessons': ['welcome']
}, {
    'id': 'basics',
    'title': '基礎',
    'description': '<p>出發點，學習語言的基礎。</p><p>如何定義新的變數，執行函式，及任何接下來模組必要的基礎知識。</p>',
    'lessons': ['basics', 'flowcontrol', 'moretypes']
}, {
    'id': 'methods',
    'title': '方法和介面',
    'description': '<p>學習如何在類型定義方法，如何定義介面，及如何合併起來。</p>',
    'lessons': ['methods']
}, {
    'id': 'concurrency',
    'title': '並行性',
    'description': '<p>Go的語言本身已提供並行性功能。</p><p>本模組會介紹goroutine和channels跟如何在不同的並行設計模式使用。</p>',
    'lessons': ['concurrency']
}]).

// Translation
value('Translation', {
    "off": "off",
    "on": "on",
    "syntax": "Syntax-Highlighting",
    "lineno": "Line-Numbers",
    "reset": "Reset Slide",
    "format": "Format Source Code",
    "kill": "Kill Program",
    "run": "Run",
    "compile": "Compile and Run",
    "more": "Options",
    "toc": "Table of Contents",
    "prev": "Previous",
    "next": "Next",
    "waiting": "Waiting for remote server...",
    "errcomm": "Error communicating with remote server.",
}).

// Config for codemirror plugin
value('ui.config', {
    codemirror: {
        mode: 'text/x-go',
        matchBrackets: true,
        lineNumbers: true,
        autofocus: true,
        indentWithTabs: true,
        lineWrapping: true,
        extraKeys: {
            "Shift-Enter": function() {
                $('#run').click();
            },
            "PageDown": function() {
                return false;
            },
            "PageUp": function() {
                return false;
            },
            "Shift-Space": function() {
                $('#format').click();
            },
        }
    }
});
