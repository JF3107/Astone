/**
 * 这是我的第一个gruntfile，
 * 样板文件。 yeah~
 * @param {*} grunt 
 */
//不要忘记：npm install grunt
//不要忘记：npm install 那些组件
module.exports = function(grunt){
    //初始化configuration对象
    grunt.initConfig({
        //pkg，读取了package.json
        pkg: grunt.file.readJSON("package.json"),
        // concat组件，【重组】
        concat: {
            //操作相关
            options: {
                //文件墙倒后，文件内容之间的隔分
                separator: ';'
            },
            //DIST属性 << 姑且这么记！
            dist: {
                //要被合并的文件
                src: ['src/**/*.js'],
                //合并后的JS文件存放的位置。<%= pkg.name %>.js >>以包名为文件名
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        // uglify组件，【压缩】
        uglify: {
            options: {
                //banner，即“banner注释”、该注释将插入到输出文件的顶部
                banner: '/*! <%= pkg.name %><%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                //输出文件相关
                //'dist/<%= pkg.name %>.min.js'输出文件名: ['<%= concat.dist.dest %>']数组里面就是要处理的文件
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        // qunit组件，【测试】
        qunit: {
            //用于测试的文件位置
            files: ['test/**/*.html']
        },
        // jshint组件，【规范】
        jshint: {
            //哪些文件（js），需要被jshint
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {//本属性，用于重写jshint提供的默认检测规则
                globals: {
                    jquery:true,
                    console:true,
                    module:true
                }
            }
        },
        // watch组件，【监控文件（变化与否）--> 执行任务】
        watch: {
            //待监控文件
            files: ['<%= jshint.files %>'],
            //上述文件变更后，立刻执行以下任务
            tasks: ['jshint', 'qunit']
        }
    });

}

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-qunit');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('test', ['jshint', 'qunit']);
grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
